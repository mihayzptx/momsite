const express = require('express');
const path = require('path');
const session = require('express-session');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
  secret: 'momconnect-secret-key',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 24 * 60 * 60 * 1000 } // 24 hours
}));

// Dummy user database
const users = [
  {
    id: 1,
    firstName: 'Jane',
    lastName: 'Doe',
    email: 'jane@example.com',
    password: 'password123',
    isPregnant: true,
    hasChild: false,
    dueDate: '2025-09-15',
    pregnancyWeek: 28
  }
];

// In-memory database for pregnancy data
const pregnancyWeekData = {
  28: {
    babySize: 'Eggplant',
    babyWeight: '2.2 lbs',
    babyLength: '14.8 in',
    babyDevelopment: 'Your baby is now the size of an eggplant. They can blink their eyes, which now have lashes. Their brain is developing rapidly, and they\'re beginning to regulate their own body temperature. They can also hiccup, which you might feel as small rhythmic movements.',
    momChanges: 'You\'re now in your third trimester! Your uterus has expanded significantly and is likely putting pressure on your organs, which can cause some discomfort. You may notice more Braxton Hicks contractions as your body prepares for labor.',
    symptoms: [
      { name: 'Shortness of Breath', description: 'Your expanding uterus is pressing on your diaphragm, making it harder to take deep breaths.' },
      { name: 'Backaches', description: 'The weight of your growing baby puts strain on your back muscles.' },
      { name: 'Leg Cramps', description: 'You may experience more cramping in your calves, especially at night.' },
      { name: 'Braxton Hicks', description: 'These practice contractions help prepare your body for labor.' }
    ],
    nutritionTips: [
      { title: 'Increase Iron Intake', description: 'Iron-deficiency anemia is common during pregnancy. Eat iron-rich foods like lean red meat, spinach, and beans. Pair with vitamin C to enhance absorption.' },
      { title: 'Omega-3 Fatty Acids', description: 'Essential for your baby\'s brain development. Include sources like salmon, chia seeds, and walnuts in your diet.' },
      { title: 'Stay Hydrated', description: 'Proper hydration helps prevent constipation, urinary tract infections, and preterm labor. Aim for 8-10 glasses of water daily.' }
    ],
    todoList: [
      { title: 'Start Your Birth Plan', description: 'Begin thinking about your preferences for labor and delivery. Discuss options with your healthcare provider and partner.' },
      { title: 'Register for Childbirth Classes', description: 'Sign up for childbirth education classes. They typically last 6-8 weeks, so now is a good time to start.' },
      { title: 'Research Pediatricians', description: 'Begin looking for a pediatrician for your baby. Ask for recommendations and schedule interviews.' },
      { title: 'Start Baby Shopping', description: 'Begin purchasing essential items for your baby. Don\'t forget to use our Discount Map to save on your purchases!' }
    ]
  }
};

// Mock appointments
const appointments = [
  {
    id: 1,
    userId: 1,
    date: '2025-04-15T10:30:00',
    title: 'Third Trimester Checkup',
    doctorName: 'Dr. Sarah Johnson',
    location: '123 Medical Center',
    notes: 'Remember to bring your pregnancy journal'
  }
];

// Authentication middleware
const authenticate = (req, res, next) => {
  if (req.session.userId) {
    req.user = users.find(user => user.id === req.session.userId);
    next();
  } else {
    res.redirect('/login.html');
  }
};

// ROUTES

// Login route
app.post('/api/login', (req, res) => {
  const { email, password } = req.body;
  const user = users.find(u => u.email === email && u.password === password);
  
  if (user) {
    req.session.userId = user.id;
    res.json({ success: true, redirectUrl: '/dashboard.html' });
  } else {
    res.status(401).json({ success: false, message: 'Invalid credentials' });
  }
});

// Register route
app.post('/api/register', (req, res) => {
  const { firstName, lastName, email, password, isPregnant, dueDate } = req.body;
  
  // Check if email already exists
  if (users.some(user => user.email === email)) {
    return res.status(400).json({ success: false, message: 'Email already exists' });
  }
  
  // Create new user
  const newUser = {
    id: users.length + 1,
    firstName,
    lastName,
    email,
    password,
    isPregnant: isPregnant === 'true' || isPregnant === true,
    hasChild: false,
    dueDate: dueDate || null,
    pregnancyWeek: isPregnant ? 28 : null // Default to 28 weeks for demo
  };
  
  users.push(newUser);
  req.session.userId = newUser.id;
  
  res.json({ success: true, redirectUrl: '/dashboard.html' });
});

// Logout route
app.get('/api/logout', (req, res) => {
  req.session.destroy();
  res.redirect('/login.html');
});

// Get current user data
app.get('/api/user', authenticate, (req, res) => {
  res.json({ success: true, user: req.user });
});

// Get pregnancy data for current week
app.get('/api/pregnancy/current-week', authenticate, (req, res) => {
  if (!req.user.isPregnant) {
    return res.status(400).json({ success: false, message: 'User is not pregnant' });
  }
  
  const weekData = pregnancyWeekData[req.user.pregnancyWeek] || {};
  res.json({ success: true, data: weekData, currentWeek: req.user.pregnancyWeek });
});

// Get pregnancy data for specific week
app.get('/api/pregnancy/week/:week', authenticate, (req, res) => {
  const week = parseInt(req.params.week);
  
  if (isNaN(week) || week < 1 || week > 40) {
    return res.status(400).json({ success: false, message: 'Invalid week' });
  }
  
  const weekData = pregnancyWeekData[week] || {};
  res.json({ success: true, data: weekData, week });
});

// Get user appointments
app.get('/api/appointments', authenticate, (req, res) => {
  const userAppointments = appointments.filter(appt => appt.userId === req.user.id);
  res.json({ success: true, appointments: userAppointments });
});

// Handle 404s
app.use((req, res) => {
  // Only handle API requests with 404 JSON response
  if (req.path.startsWith('/api/')) {
    return res.status(404).json({ success: false, message: 'API endpoint not found' });
  }
  
  // For non-API requests, try to serve the requested HTML file or index.html
  res.sendFile(path.join(__dirname, 'public', req.path.endsWith('.html') ? req.path : 'index.html'));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Visit http://localhost:${PORT} to access the application`);
});

module.exports = app;
