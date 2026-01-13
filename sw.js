const CACHE_NAME = 'wonju-food-v1';
const ASSETS = [
    './',
    './index.html',
    './style.css',
    './script.js',
    './data.js',
    './assets/hero.png',
    './assets/icon.png',
    'https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.8/dist/web/static/pretendard.css'
];

self.addEventListener('install', (e) => {
    e.waitUntil(
        caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
    );
});

self.addEventListener('fetch', (e) => {
    e.respondWith(
        caches.match(e.request).then((response) => response || fetch(e.request))
    );
});
