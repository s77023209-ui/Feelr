// Navigation Management
const Navigation = {
  init: function() {
    this.menuToggle = document.getElementById('menuToggle');
    this.navMenu = document.getElementById('navMenu');
    this.navbar = document.getElementById('navbar');
    
    if (this.menuToggle) {
      this.menuToggle.addEventListener('click', () => this.toggleMenu());
    }
    
    // Close menu when clicking on a link
    if (this.navMenu) {
      this.navMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => this.closeMenu());
      });
    }
    
    // Close menu when clicking outside
    document.addEventListener('click', (e) => this.handleClickOutside(e));
    
    // Update active link
    this.updateActiveLink();
    
    // Sticky navbar on scroll
    window.addEventListener('scroll', () => this.handleScroll());
  },

  toggleMenu: function() {
    if (this.navMenu && this.menuToggle) {
      const isActive = this.navMenu.classList.contains('active');
      if (isActive) {
        this.closeMenu();
      } else {
        this.openMenu();
      }
    }
  },

  openMenu: function() {
    if (this.navMenu && this.menuToggle) {
      this.navMenu.classList.add('active');
      this.menuToggle.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  },

  closeMenu: function() {
    if (this.navMenu && this.menuToggle) {
      this.navMenu.classList.remove('active');
      this.menuToggle.classList.remove('active');
      document.body.style.overflow = 'auto';
    }
  },

  handleClickOutside: function(e) {
    if (this.navMenu && this.menuToggle) {
      if (!this.navMenu.contains(e.target) && !this.menuToggle.contains(e.target)) {
        this.closeMenu();
      }
    }
  },

  updateActiveLink: function() {
    const currentPath = window.location.pathname;
    const links = document.querySelectorAll('.nav-menu a');
    
    links.forEach(link => {
      link.classList.remove('active');
      const href = link.getAttribute('href');
      
      if (currentPath.includes(href) || 
          (currentPath.endsWith('/') && href.includes('index.html'))) {
        link.classList.add('active');
      }
    });
  },

  handleScroll: function() {
    if (this.navbar) {
      if (window.scrollY > 50) {
        this.navbar.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
      } else {
        this.navbar.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
      }
    }
  }
};

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', () => {
  Navigation.init();
});