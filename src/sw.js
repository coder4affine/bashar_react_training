workbox.skipWaiting();
workbox.clientsClaim();

workbox.routing.registerRoute(
  new RegExp('https:.*min.(css|js)'),
  workbox.strategies.staleWhileRevalidate({
    cacheName: 'cdn-cache',
  }),
);

workbox.routing.registerRoute(
  new RegExp('http://localhost:3004/*'),
  workbox.strategies.networkFirst(),
);

workbox.routing.registerRoute(
  new RegExp('http://localhost:5000/*'),
  workbox.strategies.networkFirst(),
);

self.addEventListener('fetch', event => {
  if (
    event.request.method === 'POST' ||
    event.request.method === 'PUT' ||
    event.request.method === 'DELETE'
  ) {
    event.respondWith(
      fetch(event.request).catch(
        () =>
          new Response(
            JSON.stringify({
              error: 'This action disabled while app is offline',
            }),
            {
              headers: {
                'Content-Type': 'application/json',
              },
            },
          ),
      ),
    );
  }
});

workbox.precaching.precacheAndRoute(self._precacheManifest || []);