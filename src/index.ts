import { Logger } from '@/core/logger';

// Initialize the library when loaded
if (typeof window !== 'undefined') {
    console.log(Logger)
    // Define the global properties if not already defined
    if (!window.__trk_queue) {
      window.__trk_queue = [];
    }
    
    if (!window.trk) {
      window.trk = function(...args: any[]) {
        if (!window.__trk_queue) {
          window.__trk_queue = [];
        }
        window.__trk_queue.push(Array.prototype.slice.call(args));
      };
    }
    
    // Initialize the library
    if (document.readyState === 'complete' || document.readyState === 'interactive') {
      setTimeout(() => console.log('here'), 1);
    } else {
      document.addEventListener('DOMContentLoaded', () => console.log('here'));
    }
  }
  