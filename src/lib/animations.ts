/**
 * Animation utilities and helpers for ZyatrIA
 */

export interface AnimationConfig {
  duration?: number;
  delay?: number;
  easing?: string;
  iterations?: number | 'infinite';
}

/**
 * Intersection Observer for scroll animations
 */
export function observeScrollAnimations() {
  if (typeof window === 'undefined') return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('scroll-reveal');
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    }
  );

  // Observe all elements with data-animate attribute
  document.querySelectorAll('[data-animate]').forEach((el) => {
    observer.observe(el);
  });

  return observer;
}

/**
 * Stagger animation helper
 */
export function staggerAnimation(
  selector: string,
  animationClass: string,
  delayIncrement: number = 100
) {
  if (typeof window === 'undefined') return;

  const elements = document.querySelectorAll(selector);
  elements.forEach((el, index) => {
    setTimeout(() => {
      el.classList.add(animationClass);
    }, index * delayIncrement);
  });
}

/**
 * Parallax scroll effect
 */
export function initParallax(selector: string, speed: number = 0.5) {
  if (typeof window === 'undefined') return;

  const elements = document.querySelectorAll(selector);
  
  const handleScroll = () => {
    const scrolled = window.pageYOffset;
    
    elements.forEach((el) => {
      const element = el as HTMLElement;
      const offset = element.offsetTop;
      const distance = scrolled - offset;
      const translate = distance * speed;
      
      element.style.transform = `translateY(${translate}px)`;
    });
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  
  return () => window.removeEventListener('scroll', handleScroll);
}

/**
 * Smooth scroll to element
 */
export function smoothScrollTo(
  target: string | HTMLElement,
  offset: number = 80
) {
  if (typeof window === 'undefined') return;

  const element = typeof target === 'string' 
    ? document.querySelector(target) 
    : target;

  if (!element) return;

  const elementPosition = element.getBoundingClientRect().top;
  const offsetPosition = elementPosition + window.pageYOffset - offset;

  window.scrollTo({
    top: offsetPosition,
    behavior: 'smooth'
  });
}

/**
 * Count up animation for numbers
 */
export function animateNumber(
  element: HTMLElement,
  target: number,
  duration: number = 2000,
  prefix: string = '',
  suffix: string = ''
) {
  if (typeof window === 'undefined') return;

  const start = 0;
  const increment = target / (duration / 16);
  let current = start;

  const timer = setInterval(() => {
    current += increment;
    if (current >= target) {
      current = target;
      clearInterval(timer);
    }
    element.textContent = `${prefix}${Math.floor(current).toLocaleString()}${suffix}`;
  }, 16);

  return () => clearInterval(timer);
}

/**
 * Typing animation effect
 */
export function typeWriter(
  element: HTMLElement,
  text: string,
  speed: number = 50,
  onComplete?: () => void
) {
  if (typeof window === 'undefined') return;

  let i = 0;
  element.textContent = '';

  const timer = setInterval(() => {
    if (i < text.length) {
      element.textContent += text.charAt(i);
      i++;
    } else {
      clearInterval(timer);
      onComplete?.();
    }
  }, speed);

  return () => clearInterval(timer);
}

/**
 * Fade in elements on scroll
 */
export function fadeInOnScroll(selector: string, threshold: number = 0.1) {
  if (typeof window === 'undefined') return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in-up');
        }
      });
    },
    { threshold }
  );

  document.querySelectorAll(selector).forEach((el) => {
    observer.observe(el);
  });

  return observer;
}

/**
 * Ripple effect on click
 */
export function createRipple(event: MouseEvent, element: HTMLElement) {
  const ripple = document.createElement('span');
  const rect = element.getBoundingClientRect();
  const size = Math.max(rect.width, rect.height);
  const x = event.clientX - rect.left - size / 2;
  const y = event.clientY - rect.top - size / 2;

  ripple.style.width = ripple.style.height = `${size}px`;
  ripple.style.left = `${x}px`;
  ripple.style.top = `${y}px`;
  ripple.classList.add('ripple');

  element.appendChild(ripple);

  setTimeout(() => {
    ripple.remove();
  }, 600);
}

/**
 * Magnetic button effect
 */
export function magneticEffect(button: HTMLElement, strength: number = 0.3) {
  if (typeof window === 'undefined') return;

  const handleMouseMove = (e: MouseEvent) => {
    const rect = button.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    button.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
  };

  const handleMouseLeave = () => {
    button.style.transform = 'translate(0, 0)';
  };

  button.addEventListener('mousemove', handleMouseMove);
  button.addEventListener('mouseleave', handleMouseLeave);

  return () => {
    button.removeEventListener('mousemove', handleMouseMove);
    button.removeEventListener('mouseleave', handleMouseLeave);
  };
}

/**
 * Cursor follow effect
 */
export function cursorFollower(selector: string) {
  if (typeof window === 'undefined') return;

  const cursor = document.querySelector(selector) as HTMLElement;
  if (!cursor) return;

  const handleMouseMove = (e: MouseEvent) => {
    cursor.style.left = `${e.clientX}px`;
    cursor.style.top = `${e.clientY}px`;
  };

  document.addEventListener('mousemove', handleMouseMove);

  return () => document.removeEventListener('mousemove', handleMouseMove);
}

/**
 * Tilt effect on hover
 */
export function tiltEffect(element: HTMLElement, maxTilt: number = 10) {
  if (typeof window === 'undefined') return;

  const handleMouseMove = (e: MouseEvent) => {
    const rect = element.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * maxTilt;
    const rotateY = ((centerX - x) / centerX) * maxTilt;

    element.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  const handleMouseLeave = () => {
    element.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
  };

  element.addEventListener('mousemove', handleMouseMove);
  element.addEventListener('mouseleave', handleMouseLeave);

  return () => {
    element.removeEventListener('mousemove', handleMouseMove);
    element.removeEventListener('mouseleave', handleMouseLeave);
  };
}

/**
 * Initialize all animations
 */
export function initAnimations() {
  if (typeof window === 'undefined') return;

  // Scroll animations
  observeScrollAnimations();
  
  // Fade in on scroll
  fadeInOnScroll('[data-fade-in]');

  // Add ripple effect to buttons
  document.querySelectorAll('[data-ripple]').forEach((button) => {
    button.addEventListener('click', (e) => {
      createRipple(e as MouseEvent, button as HTMLElement);
    });
  });

  // Add magnetic effect to buttons
  document.querySelectorAll('[data-magnetic]').forEach((button) => {
    magneticEffect(button as HTMLElement);
  });

  // Add tilt effect to cards
  document.querySelectorAll('[data-tilt]').forEach((card) => {
    tiltEffect(card as HTMLElement);
  });
}
