const PROXY_URL = 'https://corsproxy.io?';

self.addEventListener('install', (event) => {
  // Forces the service worker to activate immediately without waiting for a page reload
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  // Allows the service worker to control all open tabs immediately
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', (event) => {
  const requestUrl = event.request.url;

  // Detect if the game is requesting a file from jsDelivr or another CDN
  if (requestUrl.includes('jsdelivr.net') || requestUrl.includes('cdnjs') || requestUrl.includes('unpkg.com')) {
    
    event.respondWith(
      // Try loading through the proxy first
      fetch(PROXY_URL + encodeURIComponent(requestUrl))
        .catch(() => {
          // FAILOVER: If the proxy fails or is blocked, swap to the unblocked Fastly mirror
          if (requestUrl.includes('cdn.jsdelivr.net')) {
            const fallbackUrl = requestUrl.replace('cdn.jsdelivr.net', 'fastly.jsdelivr.net');
            return fetch(fallbackUrl);
          }
          // Fallback to the original request if no mirror exists
          return fetch(event.request);
        })
    );
  }
});
