// Career Detail Page JavaScript

document.addEventListener('DOMContentLoaded', function() {
  
  // Modal Elements
  const modal = document.getElementById('application-modal');
  const applyBtnMobile = document.getElementById('apply-btn-mobile');
  const applyBtnDesktop = document.getElementById('apply-btn-desktop');
  const closeModalBtn = document.getElementById('close-modal-btn');
  const cancelBtn = document.getElementById('cancel-btn');
  const applicationForm = document.getElementById('application-form');
  const successMessage = document.getElementById('form-success-message');
  
  // Open Modal
  function openModal() {
    modal.classList.remove('hidden');
    modal.classList.add('show');
    document.body.style.overflow = 'hidden'; // Prevent background scroll
  }
  
  // Close Modal
  function closeModal() {
    modal.classList.remove('show');
    modal.classList.add('hidden');
    document.body.style.overflow = ''; // Restore scroll
  }
  
  // Event Listeners for Opening Modal
  if (applyBtnMobile) {
    applyBtnMobile.addEventListener('click', openModal);
  }
  
  if (applyBtnDesktop) {
    applyBtnDesktop.addEventListener('click', openModal);
  }
  
  // Event Listeners for Closing Modal
  if (closeModalBtn) {
    closeModalBtn.addEventListener('click', closeModal);
  }
  
  if (cancelBtn) {
    cancelBtn.addEventListener('click', closeModal);
  }
  
  // Close modal when clicking outside
  modal.addEventListener('click', function(e) {
    if (e.target === modal) {
      closeModal();
    }
  });
  
  // Close modal on Escape key
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
      closeModal();
    }
  });
  
  // Form Submission
  if (applicationForm) {
    applicationForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Get form data
      const formData = new FormData(applicationForm);
      
      // Validate file size (max 5MB)
      const resumeFile = formData.get('resume');
      if (resumeFile && resumeFile.size > 5 * 1024 * 1024) {
        alert('Resume file size must be less than 5MB');
        return;
      }
      
      // Disable submit button
      const submitBtn = applicationForm.querySelector('button[type="submit"]');
      submitBtn.disabled = true;
      submitBtn.textContent = 'Submitting...';
      
      // Simulate form submission (replace with actual API call)
      setTimeout(() => {
        // Show success message
        successMessage.classList.remove('hidden');
        
        // Reset form
        applicationForm.reset();
        
        // Re-enable submit button
        submitBtn.disabled = false;
        submitBtn.textContent = 'Submit Application';
        
        // Close modal after 3 seconds
        setTimeout(() => {
          closeModal();
          successMessage.classList.add('hidden');
        }, 3000);
        
        // In production, replace setTimeout with actual fetch/axios call:
        /*
        fetch('/api/submit-application', {
          method: 'POST',
          body: formData
        })
        .then(response => response.json())
        .then(data => {
          successMessage.classList.remove('hidden');
          applicationForm.reset();
          submitBtn.disabled = false;
          submitBtn.textContent = 'Submit Application';
          
          setTimeout(() => {
            closeModal();
            successMessage.classList.add('hidden');
          }, 3000);
        })
        .catch(error => {
          console.error('Error:', error);
          alert('An error occurred. Please try again.');
          submitBtn.disabled = false;
          submitBtn.textContent = 'Submit Application';
        });
        */
      }, 2000);
    });
  }
  
  // Copy Link Functionality
  const copyLinkBtn = document.getElementById('copy-link-btn');
  const copyNotification = document.getElementById('copy-notification');
  
  if (copyLinkBtn) {
    copyLinkBtn.addEventListener('click', function() {
      const currentURL = window.location.href;
      
      // Copy to clipboard
      navigator.clipboard.writeText(currentURL).then(() => {
        // Show notification
        copyNotification.classList.remove('hidden');
        
        // Hide notification after 3 seconds
        setTimeout(() => {
          copyNotification.classList.add('hidden');
        }, 3000);
      }).catch(err => {
        console.error('Failed to copy:', err);
        // Fallback for older browsers
        const textArea = document.createElement('textarea');
        textArea.value = currentURL;
        document.body.appendChild(textArea);
        textArea.select();
        try {
          document.execCommand('copy');
          copyNotification.classList.remove('hidden');
          setTimeout(() => {
            copyNotification.classList.add('hidden');
          }, 3000);
        } catch (err) {
          console.error('Fallback copy failed:', err);
        }
        document.body.removeChild(textArea);
      });
    });
  }
  
  // Smooth Scroll for Anchor Links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href !== '#' && href !== '') {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    });
  });
  
  // File Input Visual Feedback
  const fileInput = document.getElementById('resume');
  if (fileInput) {
    fileInput.addEventListener('change', function(e) {
      const fileName = e.target.files[0]?.name;
      if (fileName) {
        // You can add visual feedback here if needed
        console.log('File selected:', fileName);
      }
    });
  }
  
  // Form Validation Enhancement
  const requiredFields = applicationForm.querySelectorAll('[required]');
  requiredFields.forEach(field => {
    field.addEventListener('invalid', function(e) {
      e.preventDefault();
      this.classList.add('border-red-500');
    });
    
    field.addEventListener('input', function() {
      if (this.validity.valid) {
        this.classList.remove('border-red-500');
      }
    });
  });
  
  // Scroll Progress Indicator (Optional)
  const progressBar = document.createElement('div');
  progressBar.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    height: 3px;
    background: linear-gradient(90deg, #4031D4, #7c3aed);
    width: 0%;
    z-index: 9999;
    transition: width 0.1s ease;
  `;
  document.body.appendChild(progressBar);
  
  window.addEventListener('scroll', function() {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    progressBar.style.width = scrolled + '%';
  });
  
  // Back to Top Button
  const backToTopBtn = document.createElement('button');
  backToTopBtn.innerHTML = `
    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18"/>
    </svg>
  `;
  backToTopBtn.style.cssText = `
    position: fixed;
    bottom: 2rem;
    right: 2rem;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    background: #4031D4;
    color: white;
    border: none;
    cursor: pointer;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
    z-index: 1000;
    box-shadow: 0 4px 12px rgba(64, 49, 212, 0.3);
  `;
  backToTopBtn.classList.add('back-to-top-btn');
  document.body.appendChild(backToTopBtn);
  
  window.addEventListener('scroll', function() {
    if (window.pageYOffset > 300) {
      backToTopBtn.style.opacity = '1';
      backToTopBtn.style.visibility = 'visible';
    } else {
      backToTopBtn.style.opacity = '0';
      backToTopBtn.style.visibility = 'hidden';
    }
  });
  
  backToTopBtn.addEventListener('click', function() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
  
  // Hover effect for back to top button
  backToTopBtn.addEventListener('mouseenter', function() {
    this.style.transform = 'scale(1.1)';
    this.style.background = '#5041E4';
  });
  
  backToTopBtn.addEventListener('mouseleave', function() {
    this.style.transform = 'scale(1)';
    this.style.background = '#4031D4';
  });
  
  // Analytics tracking (optional - replace with your analytics code)
  function trackEvent(category, action, label) {
    // Example: Google Analytics
    if (typeof gtag !== 'undefined') {
      gtag('event', action, {
        'event_category': category,
        'event_label': label
      });
    }
    console.log('Event tracked:', category, action, label);
  }
  
  // Track apply button clicks
  if (applyBtnMobile) {
    applyBtnMobile.addEventListener('click', function() {
      trackEvent('Career', 'Apply Button Click', 'Mobile');
    });
  }
  
  if (applyBtnDesktop) {
    applyBtnDesktop.addEventListener('click', function() {
      trackEvent('Career', 'Apply Button Click', 'Desktop');
    });
  }
  
  // Track form submission
  if (applicationForm) {
    applicationForm.addEventListener('submit', function() {
      trackEvent('Career', 'Application Submit', 'Senior VFX Compositor');
    });
  }
  
  // Track social share clicks
  const shareButtons = document.querySelectorAll('[title*="Share"]');
  shareButtons.forEach(btn => {
    btn.addEventListener('click', function() {
      const platform = this.getAttribute('title').replace('Share on ', '').replace('Share via ', '');
      trackEvent('Career', 'Share Click', platform);
    });
  });
  
});

// Print Job Description
function printJobDescription() {
  window.print();
}

// Share on LinkedIn
function shareOnLinkedIn() {
  const url = encodeURIComponent(window.location.href);
  const title = encodeURIComponent(document.title);
  window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`, '_blank');
}

// Share on Twitter
function shareOnTwitter() {
  const url = encodeURIComponent(window.location.href);
  const text = encodeURIComponent('Check out this job opening at PICSTOL!');
  window.open(`https://twitter.com/intent/tweet?url=${url}&text=${text}`, '_blank');
}

// Share via Email
function shareViaEmail() {
  const subject = encodeURIComponent(document.title);
  const body = encodeURIComponent(`Check out this job opening: ${window.location.href}`);
  window.location.href = `mailto:?subject=${subject}&body=${body}`;
}
