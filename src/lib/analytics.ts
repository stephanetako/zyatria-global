import { baseUrl } from './base-url';

interface TrackEventParams {
  event: string;
  page?: string;
  data?: Record<string, any>;
}

export const trackEvent = async ({ event, page, data }: TrackEventParams) => {
  try {
    const response = await fetch(`${baseUrl}/api/analytics`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        event,
        page: page || window.location.pathname,
        timestamp: new Date().toISOString(),
        userAgent: navigator.userAgent,
        referrer: document.referrer,
        data: {
          ...data,
          screenWidth: window.screen.width,
          screenHeight: window.screen.height,
          language: navigator.language,
        },
      }),
    });

    if (!response.ok) {
      console.error('Failed to track event:', event);
    }
  } catch (error) {
    console.error('Analytics error:', error);
  }
};

// Événements prédéfinis
export const analytics = {
  // Page views
  pageView: (page?: string) => {
    trackEvent({ event: 'page_view', page });
  },

  // Conversions
  formSubmit: (formName: string, data?: Record<string, any>) => {
    trackEvent({ 
      event: 'form_submit', 
      data: { formName, ...data } 
    });
  },

  buttonClick: (buttonName: string, location?: string) => {
    trackEvent({ 
      event: 'button_click', 
      data: { buttonName, location } 
    });
  },

  // E-commerce
  viewPricing: (plan?: string) => {
    trackEvent({ 
      event: 'view_pricing', 
      data: { plan } 
    });
  },

  selectPlan: (plan: string, price: number) => {
    trackEvent({ 
      event: 'select_plan', 
      data: { plan, price } 
    });
  },

  initiateCheckout: (plan: string, price: number) => {
    trackEvent({ 
      event: 'initiate_checkout', 
      data: { plan, price, currency: 'USD' } 
    });
  },

  purchase: (plan: string, price: number, transactionId?: string) => {
    trackEvent({ 
      event: 'purchase', 
      data: { 
        plan, 
        price, 
        currency: 'USD',
        transactionId 
      } 
    });
  },

  // Engagement
  chatOpen: () => {
    trackEvent({ event: 'chat_open' });
  },

  chatMessage: (messageCount: number) => {
    trackEvent({ 
      event: 'chat_message', 
      data: { messageCount } 
    });
  },

  newsletterSubscribe: (email: string) => {
    trackEvent({ 
      event: 'newsletter_subscribe', 
      data: { email } 
    });
  },

  videoPlay: (videoName: string) => {
    trackEvent({ 
      event: 'video_play', 
      data: { videoName } 
    });
  },

  downloadResource: (resourceName: string) => {
    trackEvent({ 
      event: 'download_resource', 
      data: { resourceName } 
    });
  },

  // Navigation
  clickCTA: (ctaText: string, location: string) => {
    trackEvent({ 
      event: 'click_cta', 
      data: { ctaText, location } 
    });
  },

  scrollDepth: (depth: number) => {
    trackEvent({ 
      event: 'scroll_depth', 
      data: { depth } 
    });
  },

  timeOnPage: (seconds: number) => {
    trackEvent({ 
      event: 'time_on_page', 
      data: { seconds } 
    });
  },

  // Errors
  error: (errorMessage: string, errorType?: string) => {
    trackEvent({ 
      event: 'error', 
      data: { errorMessage, errorType } 
    });
  },
};

// Hook pour tracker automatiquement le temps passé sur la page
export const usePageTracking = () => {
  if (typeof window === 'undefined') return;

  const startTime = Date.now();

  // Track page view
  analytics.pageView();

  // Track scroll depth
  let maxScroll = 0;
  const handleScroll = () => {
    const scrollPercent = Math.round(
      (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
    );
    if (scrollPercent > maxScroll) {
      maxScroll = scrollPercent;
      if (scrollPercent >= 25 && scrollPercent < 50) {
        analytics.scrollDepth(25);
      } else if (scrollPercent >= 50 && scrollPercent < 75) {
        analytics.scrollDepth(50);
      } else if (scrollPercent >= 75 && scrollPercent < 100) {
        analytics.scrollDepth(75);
      } else if (scrollPercent === 100) {
        analytics.scrollDepth(100);
      }
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });

  // Track time on page when leaving
  const handleBeforeUnload = () => {
    const timeSpent = Math.round((Date.now() - startTime) / 1000);
    analytics.timeOnPage(timeSpent);
  };

  window.addEventListener('beforeunload', handleBeforeUnload);

  // Cleanup
  return () => {
    window.removeEventListener('scroll', handleScroll);
    window.removeEventListener('beforeunload', handleBeforeUnload);
  };
};
