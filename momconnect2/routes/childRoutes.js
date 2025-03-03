// Add these routes to your app.js file

// Mock children data for the prototype
const children = [
  {
    id: 1,
    userId: 1,
    name: "Emma",
    birthdate: "2023-06-15",
    gender: "female",
    notes: "Loves stories and music"
  }
];

// Import the child development data module
const { 
  getChildDevelopmentData, 
  calculateAgeInMonths, 
  getUpcomingMilestones 
} = require('./data/childData');

// Get child records for current user
app.get('/api/children', authenticate, (req, res) => {
  const userChildren = children.filter(child => child.userId === req.user.id);
  
  // Calculate age in months for each child
  const childrenWithAge = userChildren.map(child => {
    const ageInMonths = calculateAgeInMonths(child.birthdate);
    return {
      ...child,
      ageInMonths,
      ageText: formatAgeText(ageInMonths)
    };
  });
  
  res.json({ success: true, children: childrenWithAge });
});

// Get specific child record
app.get('/api/children/:id', authenticate, (req, res) => {
  const childId = parseInt(req.params.id);
  const child = children.find(c => c.id === childId && c.userId === req.user.id);
  
  if (!child) {
    return res.status(404).json({ success: false, message: 'Child not found' });
  }
  
  // Calculate age in months
  const ageInMonths = calculateAgeInMonths(child.birthdate);
  
  // Get development data for the current age
  const developmentData = getChildDevelopmentData(ageInMonths);
  
  // Get upcoming milestones
  const upcomingMilestones = getUpcomingMilestones(ageInMonths);
  
  res.json({
    success: true,
    child: {
      ...child,
      ageInMonths,
      ageText: formatAgeText(ageInMonths)
    },
    developmentData,
    upcomingMilestones
  });
});

// Create a new child record
app.post('/api/children', authenticate, (req, res) => {
  const { name, birthdate, gender, notes } = req.body;
  
  // Validate required fields
  if (!name || !birthdate) {
    return res.status(400).json({ 
      success: false, 
      message: 'Name and birthdate are required' 
    });
  }
  
  // Create new child record
  const newChild = {
    id: children.length + 1,
    userId: req.user.id,
    name,
    birthdate,
    gender: gender || '',
    notes: notes || ''
  };
  
  children.push(newChild);
  
  // Calculate age in months
  const ageInMonths = calculateAgeInMonths(newChild.birthdate);
  
  res.status(201).json({ 
    success: true, 
    child: {
      ...newChild,
      ageInMonths,
      ageText: formatAgeText(ageInMonths)
    }
  });
});

// Update a child record
app.put('/api/children/:id', authenticate, (req, res) => {
  const childId = parseInt(req.params.id);
  const { name, birthdate, gender, notes } = req.body;
  
  // Validate required fields
  if (!name || !birthdate) {
    return res.status(400).json({ 
      success: false, 
      message: 'Name and birthdate are required' 
    });
  }
  
  // Find child record
  const childIndex = children.findIndex(c => c.id === childId && c.userId === req.user.id);
  
  if (childIndex === -1) {
    return res.status(404).json({ 
      success: false, 
      message: 'Child not found' 
    });
  }
  
  // Update child record
  children[childIndex] = {
    ...children[childIndex],
    name,
    birthdate,
    gender: gender || children[childIndex].gender,
    notes: notes || children[childIndex].notes
  };
  
  // Calculate age in months
  const ageInMonths = calculateAgeInMonths(children[childIndex].birthdate);
  
  res.json({ 
    success: true, 
    child: {
      ...children[childIndex],
      ageInMonths,
      ageText: formatAgeText(ageInMonths)
    }
  });
});

// Delete a child record
app.delete('/api/children/:id', authenticate, (req, res) => {
  const childId = parseInt(req.params.id);
  
  // Find child record
  const childIndex = children.findIndex(c => c.id === childId && c.userId === req.user.id);
  
  if (childIndex === -1) {
    return res.status(404).json({ 
      success: false, 
      message: 'Child not found' 
    });
  }
  
  // Remove child record
  children.splice(childIndex, 1);
  
  res.json({ 
    success: true, 
    message: 'Child record deleted successfully',
    childId
  });
});

// Track a developmental milestone
app.post('/api/children/:id/milestones', authenticate, (req, res) => {
  const childId = parseInt(req.params.id);
  const { category, milestone, achievedDate, notes } = req.body;
  
  // Validate required fields
  if (!category || !milestone) {
    return res.status(400).json({ 
      success: false, 
      message: 'Category and milestone are required' 
    });
  }
  
  // Check if child exists
  const child = children.find(c => c.id === childId && c.userId === req.user.id);
  
  if (!child) {
    return res.status(404).json({ 
      success: false, 
      message: 'Child not found' 
    });
  }
  
  // In a real app, this would be saved to a database
  // For this prototype, we'll just acknowledge the tracking
  res.status(201).json({ 
    success: true, 
    message: 'Milestone recorded successfully',
    milestone: {
      childId,
      category,
      milestone,
      achievedDate: achievedDate || new Date().toISOString(),
      notes: notes || ''
    }
  });
});

// Helper function to format age in a readable format
function formatAgeText(ageInMonths) {
  if (ageInMonths < 1) {
    return 'Newborn';
  } else if (ageInMonths < 24) {
    return `${ageInMonths} month${ageInMonths === 1 ? '' : 's'}`;
  } else {
    const years = Math.floor(ageInMonths / 12);
    const months = ageInMonths % 12;
    
    if (months === 0) {
      return `${years} year${years === 1 ? '' : 's'}`;
    } else {
      return `${years} year${years === 1 ? '' : 's'}, ${months} month${months === 1 ? '' : 's'}`;
    }
  }
}