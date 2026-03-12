// PICSTOL Website JavaScript

// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  
  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', function() {
      mobileMenu.classList.toggle('hidden');
    });
  }

  // Scroll Animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-fade-in-up');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe all elements with scroll-animate class
  document.querySelectorAll('.scroll-animate').forEach(el => {
    el.style.opacity = '0';
    observer.observe(el);
  });

  // Header Scroll Effect
  let lastScroll = 0;
const header = document.querySelector('header');

if (header) {
  window.addEventListener('scroll', function() {
    const currentScroll = window.pageYOffset;

    if (currentScroll <= 0) {
      header.classList.remove('scroll-up');
      return;
    }

    if (currentScroll > lastScroll && !header.classList.contains('scroll-down')) {
      header.classList.remove('scroll-up');
      header.classList.add('scroll-down');
    } else if (currentScroll < lastScroll && header.classList.contains('scroll-down')) {
      header.classList.remove('scroll-down');
      header.classList.add('scroll-up');
    }

    lastScroll = currentScroll;
  });
}
  
  window.addEventListener('scroll', function() {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
      header.classList.remove('scroll-up');
      return;
    }
    
    if (currentScroll > lastScroll && !header.classList.contains('scroll-down')) {
      // Scrolling down
      header.classList.remove('scroll-up');
      header.classList.add('scroll-down');
    } else if (currentScroll < lastScroll && header.classList.contains('scroll-down')) {
      // Scrolling up
      header.classList.remove('scroll-down');
      header.classList.add('scroll-up');
    }
    
    lastScroll = currentScroll;
  });

  // Smooth scroll for anchor links
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

// Real Form Submission (Inquiry Page)
const contactForm = document.getElementById('contact-form');

if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const successMessage = document.getElementById('success-message');

    // Get form data
    const formData = new FormData(contactForm);

    // Validate required fields
    let isValid = true;
    const requiredFields = contactForm.querySelectorAll('[required]');

    requiredFields.forEach(field => {
      if (!field.value.trim()) {
        isValid = false;
        field.classList.add('border-red-500');
      } else {
        field.classList.remove('border-red-500');
      }
    });

    if (!isValid) return;

    // Send data to ses.php
    fetch('ses.php', {
      method: 'POST',
      body: formData
    })
    .then(response => response.text())
    .then(data => {
      if (successMessage) {
        successMessage.classList.remove('hidden');
        contactForm.reset();

        setTimeout(() => {
          successMessage.classList.add('hidden');
        }, 5000);
      }
    })
    .catch(error => {
      console.error('Error submitting form:', error);
      alert('Something went wrong. Please try again.');
    });
  });
}


  // Counter Animation
  const counters = document.querySelectorAll('.counter');
  counters.forEach(counter => {
    const target = parseInt(counter.getAttribute('data-target'));
    const duration = 2000;
    const increment = target / (duration / 16);
    let current = 0;
    
    const updateCounter = () => {
      current += increment;
      if (current < target) {
        counter.textContent = Math.floor(current);
        requestAnimationFrame(updateCounter);
      } else {
        counter.textContent = target;
      }
    };
    
    const counterObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          updateCounter();
          counterObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });
    
    counterObserver.observe(counter);
  });

  // Portfolio Filter (if on portfolio page)
  const filterButtons = document.querySelectorAll('.filter-btn');
  const portfolioItems = document.querySelectorAll('.portfolio-item');
  
  filterButtons.forEach(button => {
    button.addEventListener('click', function() {
      const filter = this.getAttribute('data-filter');
      
      // Update active button
     filterButtons.forEach(btn => {
  btn.classList.remove(
    'bg-[#4031D4]',
    'text-white',
    'shadow-lg',
    'shadow-[#4031D4]/30'
  );

  btn.classList.add(
    'bg-white/5',
    'border',
    'border-white/10'
  );
});

// Activate clicked button
this.classList.remove(
  'bg-white/5',
  'border',
  'border-white/10'
);

this.classList.add(
  'bg-[#4031D4]',
  'text-white',
  'shadow-lg',
  'shadow-[#4031D4]/30'
);
      
      // Filter items
      portfolioItems.forEach(item => {
        if (filter === 'all' || item.getAttribute('data-category') === filter) {
          item.style.display = 'block';
          setTimeout(() => {
            item.classList.add('animate-scale-in');
          }, 10);
        } else {
          item.style.display = 'none';
        }
      });
    });
  });

  // Lazy load images
  const images = document.querySelectorAll('img[data-src]');
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.getAttribute('data-src');
        img.removeAttribute('data-src');
        imageObserver.unobserve(img);
      }
    });
  });
  
  images.forEach(img => imageObserver.observe(img));

  // Add hover effect to service cards
  const serviceCards = document.querySelectorAll('.service-card');
  serviceCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-8px)';
    });
    
    card.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0)';
    });
  });

// Current page function
// Highlight Active Menu Link
const currentPage = window.location.pathname.split("/").pop();

document.querySelectorAll('.nav-link').forEach(link => {
  if (link.getAttribute('data-page') === currentPage) {
    
    // For normal links
    link.classList.remove('text-gray-300');
    link.classList.add('text-white');

    // Add underline / highlight style
    link.classList.add('relative');

    const indicator = document.createElement('span');
    indicator.className = "absolute -bottom-1 left-0 w-full h-0.5 bg-[#4031D4]";
    link.appendChild(indicator);
  }
});

// Card hover removal for mobile

// Mobile tap to expand service cards
document.querySelectorAll('.service-card').forEach(card => {
  card.addEventListener('click', function() {

    // Only activate on mobile screens
    if (window.innerWidth < 768) {

      // Close other open cards
      document.querySelectorAll('.service-card').forEach(other => {
        if (other !== card) {
          other.classList.remove('active');
        }
      });

      card.classList.toggle('active');
    }
  });
});
  // Video Modal Logic
  const videoModal = document.getElementById('video-modal');
  const modalContainer = document.getElementById('modal-container');
  const videoContainer = document.getElementById('video-container');

  if (videoModal && modalContainer && videoContainer) {
    const openModal = (videoId) => {
      // Set video content with clean parameters
      videoContainer.innerHTML = `
        <iframe 
          src="https://player.vimeo.com/video/${videoId}?autoplay=1&title=0&byline=0&portrait=0" 
          class="w-full h-full" 
          frameborder="0" 
          allow="autoplay; fullscreen; picture-in-picture" 
          allowfullscreen>
        </iframe>
      `;

      // Show modal
      videoModal.classList.remove('hidden');
      videoModal.classList.add('flex');
      document.body.style.overflow = 'hidden'; 

      // Animate in
      setTimeout(() => {
        modalContainer.classList.remove('scale-95', 'opacity-0');
        modalContainer.classList.add('scale-100', 'opacity-100');
      }, 50);
    };

    const closeModal = () => {
      modalContainer.classList.remove('scale-100', 'opacity-100');
      modalContainer.classList.add('scale-95', 'opacity-0');

      setTimeout(() => {
        videoModal.classList.remove('flex');
        videoModal.classList.add('hidden');
        videoContainer.innerHTML = ''; // Stop video
        document.body.style.overflow = '';
      }, 300);
    };

    // Use Event Delegation for triggers
    document.addEventListener('click', (e) => {
      const trigger = e.target.closest('.video-trigger');
      if (trigger) {
        e.preventDefault();
        const videoId = trigger.getAttribute('data-video');
        if (videoId) openModal(videoId);
      }
      
      if (e.target.classList.contains('modal-close') || e.target.closest('.modal-close')) {
        closeModal();
      }
    });

    // Close on Escape key
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && !videoModal.classList.contains('hidden')) {
        closeModal();
      }
    });
  }
  
});

// Page load animation
window.addEventListener('load', function() {
  document.body.classList.add('loaded');
});
