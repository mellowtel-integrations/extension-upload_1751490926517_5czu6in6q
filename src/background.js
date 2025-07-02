import Mellowtel from 'mellowtel';

// Initialize Mellowtel background
mellowtel.initBackground();

// Add opt-in generation on install
chrome.runtime.onInstalled.addListener(() => {
  mellowtel.generateAndOpenOptInLink();
});