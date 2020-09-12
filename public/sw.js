var cacheName = 'demo-app';
var filesToCache = [
    '/',
    "/static/js/bundle.js",
    "/static/js/main.chunk.js",
    "/static/js/1.chunk.js",
    "/main.8e07ed09619a7ef3e0bd.hot-update.js",
    // "https://www.homebase.co.uk/-/media/uk%20images/homebase/category-images/paint%20and%20decorating/wallpaper/2020/colours/paintable%20wallapaper%20-grey.jpg?h=800&thn=0&w=800",
    "/sw.js",
    // "/sockjs-node",
    "/manifest.json",
    "/clock_back_icon_PNp_icon.ico",
    "/Clock-Back-icon.png",
];

self.addEventListener("activate", function (e) {
    console.log("[ServiceWorker] Activate");
});

self.addEventListener('install', function (e) {
    console.log('[ServiceWorker] Install');
    e.waitUntil(
        caches.open(cacheName).then(function (cache) {
            console.log('[ServiceWorker] Caching app shell');
            return cache.addAll(filesToCache);
        })
    );
});

self.addEventListener('fetch', function (e) {
    console.log('[ServiceWorker] Fetch', e.request.url);
    e.respondWith(
        caches.match(e.request).then(function (response) {
            return response || fetch(e.request);
        })
    );
});