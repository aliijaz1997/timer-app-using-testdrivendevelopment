importScripts('https://www.gstatic.com/firebasejs/7.19.1/firebase-app.js')
importScripts('https://www.gstatic.com/firebasejs/7.19.1/firebase-messaging.js')

firebase.initializeApp({
    apiKey: "AIzaSyCmxtjmBAE2bTxl4QLcdSkJT6IYMZ596fQ",
    authDomain: "timer-app-4c1a5.firebaseapp.com",
    databaseURL: "https://timer-app-4c1a5.firebaseio.com",
    projectId: "timer-app-4c1a5",
    storageBucket: "timer-app-4c1a5.appspot.com",
    messagingSenderId: "141904267605",
    appId: "1:141904267605:web:1636e50f6ef8c62f2a87dc"
});


// const filesToCache = [
//     '/',
//     '/static/js/bundle.js',
//     '/static/js/0.chunk.js',
//     '/static/js/main.chunk.js',
//     // 'style/main.css',
//     // 'images/still_life_medium.jpg',
//     // 'index.html',
//     // 'pages/offline.html',
//     // 'pages/404.html'
//   ];

//   const staticCacheName = 'Website';

//   self.addEventListener('install', event => {
//     console.log('Attempting to install service worker and cache static assets');
//     event.waitUntil(
//       caches.open(staticCacheName)
//       .then(cache => {
//         return cache.addAll(filesToCache);
//       })
//     );
//   });

//   this.addEventListener('fetch', event => {
//   if (!navigator.onLine) {

//      event.respondWidth(
//          caches.match(event.request).then((result) => {
//              console.log('result is ', result)
//              if (result) {
//                  return result;
//              }
//          })
//      )

//   }
//   })
// let cacheData = "timerAppV1";

// this.addEventListener("install", (event) => {

//     event.waitUntil(
//         caches.open(cacheData).then((cache) => {
//             cache.addAll([
//                 "/static/js/bundle.js",
//                 "/static/js/main.chunk.js",
//                 "/static/js/1.chunk.js",
//                 "/main.3675b581f32243707130.hot-update.js",
//                 "https://www.homebase.co.uk/-/media/uk%20images/homebase/category-images/paint%20and%20decorating/wallpaper/2020/colours/paintable%20wallapaper%20-grey.jpg?h=800&thn=0&w=800",
//                 "/main.3675b581f32243707130.hot-update.js",
//                 "/sockjs-node",
//                 "/manifest.json",
//                 "/clock_back_icon_PNp_icon.ico",
//                 "/Clock-Back-icon.png",
//                 "https://fcmregistrations.googleapis.com/v1/projects/timer-app-4c1a5/registrations/eWyrEgD9OlyJm5-y77V3GY:APA91bHUc6Z6De4mF085080CW-0yohKRMVTXNQDGdPt0PiIyIED9550_BPoAendoorU-2YLU0hJl-SuGsaVuSIAlJTYVn3k3KMFguyDAASryjrWmYTaKQu4fwPLDv0yzoFrXNxNLnFGr",
//                 "https://fcmregistrations.googleapis.com/v1/projects/timer-app-4c1a5/registrations/eWyrEgD9OlyJm5-y77V3GY:APA91bHUc6Z6De4mF085080CW-0yohKRMVTXNQDGdPt0PiIyIED9550_BPoAendoorU-2YLU0hJl-SuGsaVuSIAlJTYVn3k3KMFguyDAASryjrWmYTaKQu4fwPLDv0yzoFrXNxNLnFGr",
//                 "https://fcmregistrations.googleapis.com/v1/projects/timer-app-4c1a5/registrations/eWyrEgD9OlyJm5-y77V3GY:APA91bHUc6Z6De4mF085080CW-0yohKRMVTXNQDGdPt0PiIyIED9550_BPoAendoorU-2YLU0hJl-SuGsaVuSIAlJTYVn3k3KMFguyDAASryjrWmYTaKQu4fwPLDv0yzoFrXNxNLnFGr",
//                 "https://fcmregistrations.googleapis.com/v1/projects/timer-app-4c1a5/registrations/eWyrEgD9OlyJm5-y77V3GY:APA91bHUc6Z6De4mF085080CW-0yohKRMVTXNQDGdPt0PiIyIED9550_BPoAendoorU-2YLU0hJl-SuGsaVuSIAlJTYVn3k3KMFguyDAASryjrWmYTaKQu4fwPLDv0yzoFrXNxNLnFGr",
//                 "https://fcmregistrations.googleapis.com/v1/projects/timer-app-4c1a5/registr",
//                 "https://fcmregistrations.googleapis.com/v1/projects/timer-app-4c1a5/registr",
//                 // "/static/js/0.chunk.js.map",
//                 // "/manifest.json",
//                 // "/favicon.png",
//                 // "/fmkadmapgofadopljbjfkapdkoienihi/build/react_devtools_backend.js",
//                 "/"
//             ])
//         })
//     )
// })

// this.addEventListener("fetch", (event) => {
//     event.respondWith(
//         caches.match(event.request).then((result) => {

//             return result

//         })
//     )
// })
firebase.messaging();