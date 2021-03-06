/**
 * Create cache
 */
let staticCacheId = 'rest-restaurant-v1';

/**
 *Files to cache
 */
self.addEventListener('install', function(event) {
  event.waitUntil (
    caches.open(staticCacheId).then(function(cache) {
      return cache.addAll ([
        './',
        './css/styles.css',
        './data/restaurants.json',
        './img/1.jpg',
        './img/2.jpg',
        './img/3.jpg',
        './img/4.jpg',
        './img/5.jpg',
        './img/6.jpg',
        './img/7.jpg',
        './img/8.jpg',
        './img/9.jpg',
        './img/10.jpg',
        './js/dbhelper.js',
        './js/main.js',
        './js/restaurant_info.js',
        './js/swregister.js',
        './index.html',
        './restaurant.html'
      ]);
    })
  );
});

/**
 * Perform sw install
 */
self.addEventListener('install', event => {
  event.waitUntil (
    caches.keys()
    .then(function(cache) {
      return Promise.all (
        cache.filter(function(cacheFilter) {
          return cacheFilter.startsWith('restaurant-') && cacheFilter != staticCacheId;
        }).map(function(cacheFilter) {
          return caches.delete(cacheFilter);
        })
      );
    })
  );
})

self.addEventListener('fetch', event => {
  event.respondWith (
    caches.match(event.request, { ignoreSearch: true })
    .then(response => {
      return response || fetch(event.request);
    })
  );
});
