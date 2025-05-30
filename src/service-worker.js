/* eslint-disable no-restricted-globals */

const CACHE_NAME = 'cat-sitting-pwa-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/static/js/bundle.js',
  '/static/js/bundle.js.map',
  '/static/css/main.css',
  '/static/media/cat-placeholder.jpg',
  '/manifest.json',
  '/favicon.ico'
];

// Install event
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => 
      cache.addAll(urlsToCache)
    )
  );
});

// Fetch event
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => 
      response || fetch(event.request)
    )
  );
});

// Activate event
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => 
      Promise.all(
        cacheNames
          .filter((cacheName) => 
            cacheName.startsWith('cat-sitting-pwa-') && cacheName !== CACHE_NAME
          )
          .map((cacheName) => caches.delete(cacheName))
      )
    )
  );
});

// Skip waiting so the service worker takes control immediately
self.skipWaiting();

// Clients claim so the service worker immediately controls the page
self.clients.claim();
