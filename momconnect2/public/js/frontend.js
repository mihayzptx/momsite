/**
 * MomConnect Frontend Integration
 * --------------------------------
 * This script contains the necessary code to connect the HTML frontend
 * to the backend API. Place this file in your public/js directory.
 */

// Common utility functions
const momconnect = {
  // Helper to make API requests
  api: {
    async get(url) {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return await response.json();
      } catch (error) {
        console.error('API Error:', error);
        return { success: false, error: error.message };
      }
    },
    
    async post(url, data) {
      try {
        const response = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        });
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return await response.json();
      } catch (error) {
        console.error('API Error:', error);
        return { success: false, error: error.message };
      }
    }
  },
  
  // Show a notification to the user
  showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.textContent = message;
    notification.className = `notification ${type}`;
    notification.style.position = 'fixed';
    notification.style.top = '20px';
    notification.style.right = '20px';
    notification.style.padding = '10px 20px';
    notification.style.borderRadius = '5px';
    notification.style.zIndex = '1000';
    
    if (type === 'success') {
      notification.style.backgroundColor = '#4caf50';
      notification.style.color = 'white';
    } else if (type === 'error') {
      notification.style.backgroundColor = '#f44336';
      notification.style.color = 'white';
    }
    
    document.body.appendChild(notification);
    
    // Remove notification after 3 seconds
    setTimeout(() => {
      notification.style.opacity = '0';
      notification.style.transition = 'opacity 0.5s ease';
      setTimeout(() => document.body.removeChild(notification), 500);
    }, 3000);
  },
  
  // Check if user is logged in
  async checkAuth() {
    const response = await this.api.get('/api/user');
    return response.success;
  }
};

// Login page functionality
function setupLoginPage() {
  const loginForm = document.querySelector('form');
  
  if (loginForm) {
    loginForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;
      
      const response = await momconnect.api.post('/api/login', { email, password });
      
      if (response.success) {
        window.location.href = response.redirectUrl;
      } else {
        momconnect.showNotification(response.message || 'Login failed. Please check your credentials.', 'error');
      }
    });
  }
}

// Signup page functionality
function setupSignupPage() {
  const signupForm = document.querySelector('form');
  const pregnancyToggle = document.getElementById('pregnancyToggle');
  
  if (signupForm) {
    signupForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      
      const formData = {
        firstName: document.getElementById('firstName').value,
        lastName: document.getElementById('lastName').value,
        email: document.getElementById('email').value,
        password: document.getElementById('password').value,
        isPregnant: pregnancyToggle?.checked || false,
        dueDate: document.getElementById('dueDate')?.value || null
      };
      
      const response = await momconnect.api.post('/api/register', formData);
      
      if (response.success) {
        window.location.href = response.redirectUrl;
      } else {
        momconnect.showNotification(response.message || 'Registration failed. Please try again.', 'error');
      }
    });
  }
}

// Dashboard page functionality
async function setupDashboardPage() {
  // Get user data
  const response = await momconnect.api.get('/api/user');
  
  if (!response.success) {
    window.location.href = '/login.html';
    return;
  }
  
  const user = response.user;
  
  // Update user information
  document.querySelector('.user-name').textContent = `${user.firstName} ${user.lastName}`;
  
  if (user.isPregnant) {
    document.querySelector('.user-status').textContent = `${user.pregnancyWeek} weeks pregnant`;
    
    // Get current week data for dashboard cards
    const weekResponse = await momconnect.api.get('/api/pregnancy/current-week');
    
    if (weekResponse.success) {
      // Update pregnancy progress card
      const progressCard = document.querySelector('.dashboard-card:nth-child(1)');
      if (progressCard) {
        progressCard.querySelector('.card-value').textContent = `${user.pregnancyWeek} weeks`;
        
        // Set progress bar width based on pregnancy week
        const progressBar = progressCard.querySelector('.progress-bar');
        progressBar.style.width = `${(user.pregnancyWeek / 40) * 100}%`;
      }
      
      // Update baby size card
      const sizeCard = document.querySelector('.dashboard-card:nth-child(2)');
      if (sizeCard && weekResponse.data.babySize) {
        sizeCard.querySelector('.card-value').textContent = weekResponse.data.babySize;
        sizeCard.querySelector('.card-label').textContent = `~${weekResponse.data.babyWeight}, ${weekResponse.data.babyLength}`;
      }
    }
    
    // Get appointment data
    const apptResponse = await momconnect.api.get('/api/appointments');
    
    if (apptResponse.success && apptResponse.appointments.length > 0) {
      const appt = apptResponse.appointments[0]; // Get first appointment
      const apptCard = document.querySelector('.dashboard-card:nth-child(3)');
      
      if (apptCard) {
        const apptDate = new Date(appt.date);
        apptCard.querySelector('.card-value').textContent = apptDate.toLocaleDateString('en-US', { 
          year: 'numeric', 
          month: 'long', 
          day: 'numeric' 
        });
        apptCard.querySelector('.card-label').textContent = `${appt.doctorName} - ${apptDate.toLocaleTimeString('en-US', { 
          hour: 'numeric', 
          minute: '2-digit' 
        })}`;
      }
    }
  }
}

// Pregnancy tracker page functionality
async function setupPregnancyTrackerPage() {
  // Get user data
  const response = await momconnect.api.get('/api/user');
  
  if (!response.success) {
    window.location.href = '/login.html';
    return;
  }
  
  const user = response.user;
  
  // Update user information in sidebar
  document.querySelector('.user-name').textContent = `${user.firstName} ${user.lastName}`;
  document.querySelector('.user-status').textContent = `${user.pregnancyWeek} weeks pregnant`;
  
  // Get current week data
  let currentWeek = user.pregnancyWeek;
  const currentWeekElement = document.querySelector('.current-week');
  currentWeekElement.textContent = `Week ${currentWeek}`;
  
  // Fetch and display data for the current week
  await fetchPregnancyWeekData(currentWeek);
  
  // Week navigation buttons
  const prevWeekBtn = document.getElementById('prevWeek');
  const nextWeekBtn = document.getElementById('nextWeek');
  const weekDropdown = document.getElementById('weekDropdown');
  
  prevWeekBtn.addEventListener('click', async () => {
    if (currentWeek > 1) {
      currentWeek--;
      updateWeekDisplay();
      await fetchPregnancyWeekData(currentWeek);
    }
  });
  
  nextWeekBtn.addEventListener('click', async () => {
    if (currentWeek < 40) {
      currentWeek++;
      updateWeekDisplay();
      await fetchPregnancyWeekData(currentWeek);
    }
  });
  
  if (weekDropdown) {
    weekDropdown.value = currentWeek;
    weekDropdown.addEventListener('change', async () => {
      currentWeek = parseInt(weekDropdown.value);
      updateWeekDisplay();
      await fetchPregnancyWeekData(currentWeek);
    });
  }
  
  // Function to update week display
  function updateWeekDisplay() {
    currentWeekElement.textContent = `Week ${currentWeek}`;
    
    // Update progress bar
    const progressBar = document.querySelector('.progress-bar-fill');
    progressBar.style.width = `${(currentWeek / 40) * 100}%`;
    
    // Update trimester labels
    const trimesterLabels = document.querySelectorAll('.trimester-label');
    trimesterLabels.forEach(label => label.classList.remove('active'));
    
    let trimesterIndex = 0;
    if (currentWeek > 27) {
      trimesterIndex = 2; // Third trimester
      document.querySelector('.trimester-progress h3').textContent = 'Third Trimester';
    } else if (currentWeek > 13) {
      trimesterIndex = 1; // Second trimester
      document.querySelector('.trimester-progress h3').textContent = 'Second Trimester';
    } else {
      trimesterIndex = 0; // First trimester
      document.querySelector('.trimester-progress h3').textContent = 'First Trimester';
    }
    
    trimesterLabels[trimesterIndex].classList.add('active');
  }
  
  // Tab switching functionality
  const tabButtons = document.querySelectorAll('.tracker-tab');
  const tabContents = document.querySelectorAll('.tab-content');
  
  tabButtons.forEach(button => {
    button.addEventListener('click', () => {
      const tabId = button.getAttribute('data-tab');
      
      // Remove active class from all buttons and tabs
      tabButtons.forEach(btn => btn.classList.remove('active'));
      tabContents.forEach(content => content.classList.remove('active'));
      
      // Add active class to clicked button and corresponding tab
      button.classList.add('active');
      document.getElementById(tabId).classList.add('active');
    });
  });
  
  // Function to fetch and display week data
  async function fetchPregnancyWeekData(week) {
    const weekResponse = await momconnect.api.get(`/api/pregnancy/week/${week}`);
    
    if (!weekResponse.success) {
      momconnect.showNotification('Failed to load pregnancy data for this week', 'error');
      return;
    }
    
    const data = weekResponse.data;
    
    // Update Baby tab
    if (data.babyDevelopment) {
      document.querySelector('#baby .baby-details h3').textContent = `Your Baby at Week ${week}`;
      document.querySelector('#baby .baby-details p').textContent = data.babyDevelopment;
      
      // Update stats if available
      if (data.babyWeight) {
        document.querySelector('#baby .stat-item:nth-child(1) .stat-value').textContent = data.babyWeight;
      }
      if (data.babyLength) {
        document.querySelector('#baby .stat-item:nth-child(2) .stat-value').textContent = data.babyLength;
      }
      if (data.babySize) {
        document.querySelector('#baby .stat-item:nth-child(3) .stat-value').textContent = data.babySize;
      }
    }
    
    // Update Mom tab
    if (data.momChanges) {
      document.querySelector('#mom .mom-changes h3').textContent = `Your Body at Week ${week}`;
      document.querySelector('#mom .mom-changes > p').textContent = data.momChanges;
      
      // Update symptoms if available
      if (data.symptoms && data.symptoms.length > 0) {
        const symptomsGrid = document.querySelector('#mom .symptoms-grid');
        symptomsGrid.innerHTML = '';
        
        data.symptoms.forEach(symptom => {
          symptomsGrid.innerHTML += `
            <div class="symptom-item">
              <div class="symptom-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div class="symptom-text">
                <div class="symptom-name">${symptom.name}</div>
                <div class="symptom-description">${symptom.description}</div>
              </div>
            </div>
          `;
        });
      }
    }
    
    // Update Tips tab
    if (data.nutritionTips && data.nutritionTips.length > 0) {
      document.querySelector('#tips h3').textContent = `Nutrition Tips for Week ${week}`;
      
      const tipList = document.querySelector('#tips .tip-list');
      tipList.innerHTML = '';
      
      data.nutritionTips.forEach(tip => {
        tipList.innerHTML += `
          <div class="tip-item">
            <div class="tip-icon">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div class="tip-content">
              <div class="tip-title">${tip.title}</div>
              <div class="tip-description">${tip.description}</div>
            </div>
          </div>
        `;
      });
    }
    
    // Update Todo tab
    if (data.todoList && data.todoList.length > 0) {
      document.querySelector('#todo h3').textContent = `Your ${week}-Week Checklist`;
      
      const todoList = document.querySelector('#todo .todo-list');
      todoList.innerHTML = '';
      
      data.todoList.forEach(todo => {
        todoList.innerHTML += `
          <div class="todo-item">
            <div class="todo-icon">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div class="todo-content">
              <div class="todo-title">${todo.title}</div>
              <div class="todo-description">${todo.description}</div>
            </div>
          </div>
        `;
      });
    }
  }
}

// Initialize the appropriate functionality based on the current page
document.addEventListener('DOMContentLoaded', () => {
  const currentPage = window.location.pathname;
  
  if (currentPage.includes('login.html')) {
    setupLoginPage();
  } else if (currentPage.includes('signup.html')) {
    setupSignupPage();
  } else if (currentPage.includes('dashboard.html')) {
    setupDashboardPage();
  } else if (currentPage.includes('pregnancy-tracker.html')) {
    setupPregnancyTrackerPage();
  }
  
  // Common logout functionality
  const logoutLink = document.querySelector('a[href*="logout"]');
  if (logoutLink) {
    logoutLink.addEventListener('click', (e) => {
      e.preventDefault();
      window.location.href = '/api/logout';
    });
  }
});
