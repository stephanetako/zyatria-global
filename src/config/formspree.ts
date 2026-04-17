// Formspree configuration for contact forms
// Get your form ID from https://formspree.io dashboard
export const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xeelvrdl';

// Helper function to get the Formspree URL
// formType parameter is for future extensibility (e.g., different forms)
export function getFormspreeUrl(formType?: string): string {
  return FORMSPREE_ENDPOINT;
}


