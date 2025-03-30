/**
 * Global type declarations for Converge.js
 */

// Extend the Window interface to include Converge.js properties
interface Window {
    // Initialization flags
    __trk_initialized?: boolean;
    __trk_loaded?: boolean;
    __trk_debug?: boolean;
    __trk_public_token?: string;
    __trk_snippet_version?: string;
    
    // Command queue
    __trk_queue?: any[][];
    
    // Main tracking function
    trk: (...args: any[]) => void;
    
    // Internal objects for debugging
    __trk_internal?: {
      processor: any;
      commandProcessor: any;
      browser: any;
      logger: any;
      storage: any;
      apiClient: any;
    };
  }