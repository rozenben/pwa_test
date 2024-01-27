const page1Button = document.getElementById("page1");
const page2Button = document.getElementById("page2");

page1Button.addEventListener("click", () => {
    window.location.href = "page1.html";
});

page2Button.addEventListener("click", () => {
    window.location.href = "page2.html";
});

if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
      navigator.serviceWorker.register('/service-worker.js').then(function(registration) {
        console.log('ServiceWorker registration successful with scope: ', registration.scope);
      }, function(err) {
        console.log('ServiceWorker registration failed: ', err);
      });
    });
  }
  
  let deferredPrompt;

  window.addEventListener('beforeinstallprompt', (e) => {
    // Prevent Chrome 67 and earlier from automatically showing the prompt
    e.preventDefault();
    // Stash the event so it can be triggered later.
    deferredPrompt = e;
    // Update UI notify the user they can add to home screen
    showInstallPromotion();
  });
  