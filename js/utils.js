// Utility Functions
const utils = {
  // Debounce function
  debounce: function(func, delay) {
    let timeoutId;
    return function(...args) {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => func.apply(this, args), delay);
    };
  },

  // Throttle function
  throttle: function(func, delay) {
    let lastCall = 0;
    return function(...args) {
      const now = Date.now();
      if (now - lastCall >= delay) {
        lastCall = now;
        func.apply(this, args);
      }
    };
  },

  // Get element
  getEl: function(selector) {
    return document.querySelector(selector);
  },

  // Get all elements
  getAllEl: function(selector) {
    return document.querySelectorAll(selector);
  },

  // Add class
  addClass: function(el, className) {
    if (el) el.classList.add(className);
  },

  // Remove class
  removeClass: function(el, className) {
    if (el) el.classList.remove(className);
  },

  // Toggle class
  toggleClass: function(el, className) {
    if (el) el.classList.toggle(className);
  },

  // Check if element has class
  hasClass: function(el, className) {
    return el && el.classList.contains(className);
  },

  // Smooth scroll to element
  scrollToElement: function(selector, offset = 0) {
    const el = document.querySelector(selector);
    if (el) {
      const top = el.offsetTop - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  },

  // Get scroll position
  getScrollPosition: function() {
    return window.scrollY || window.pageYOffset;
  },

  // Check if element is in viewport
  isInViewport: function(el) {
    const rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  },

  // Get current page path
  getCurrentPage: function() {
    return window.location.pathname;
  },

  // Format date
  formatDate: function(date, format = 'MM/DD/YYYY') {
    const d = new Date(date);
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    const year = d.getFullYear();
    
    return format
      .replace('MM', month)
      .replace('DD', day)
      .replace('YYYY', year);
  },

  // Validate email
  validateEmail: function(email) {
    const re = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
    return re.test(email);
  },

  // Store data in localStorage
  setStorage: function(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
      return true;
    } catch (e) {
      console.error('Storage error:', e);
      return false;
    }
  },

  // Get data from localStorage
  getStorage: function(key) {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : null;
    } catch (e) {
      console.error('Storage error:', e);
      return null;
    }
  },

  // Remove data from localStorage
  removeStorage: function(key) {
    try {
      localStorage.removeItem(key);
      return true;
    } catch (e) {
      console.error('Storage error:', e);
      return false;
    }
  }
};

// Make utils available globally
window.utils = utils;