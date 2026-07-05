// Formspree configuration
export const FORMSPREE_CONFIG = {
  // Main contact form ID
  contactFormId: 'xbdedonn',
  
  // Newsletter form ID (if different)
  newsletterFormId: 'xbdedonn',
  
  // Lead qualification form ID (if different)
  leadQualificationFormId: 'xbdedonn',
};

// Helper to get form endpoint
export function getFormspreeEndpoint(formId: string = FORMSPREE_CONFIG.contactFormId): string {
  return `https://formspree.io/f/${formId}`;
}

// Alias for backward compatibility
export const getFormspreeUrl = getFormspreeEndpoint;




