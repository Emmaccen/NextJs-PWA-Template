"use strict";

// Disable logging in development mode: See:
// https://developer.chrome.com/docs/workbox/troubleshooting-and-logging#turn_off_logging_in_development_builds_in_any_workflow
// self.__WB_DISABLE_DEV_LOGS = true;

// listen to message event from window
self.addEventListener("message", (event) => {
  // Test simulation in browser console with: window.navigator.serviceWorker.controller.postMessage({command: 'log', message: 'hello world'})
  // OR use next-pwa injected workbox object: window.workbox.messageSW({command: 'log', message: 'hello world'})
  console.log(event.data);
});
