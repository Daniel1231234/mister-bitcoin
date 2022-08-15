console.log("Service Worker Registered!")

// This function build an array of urls,
// fetch them, and store the responses in the cache,
// example: key: 'main.js' value: 'alert(3)'
// eslint-disable-next-line no-restricted-globals
self.addEventListener("install", (event) => {
  console.log("Installing service worker...")
  // var count = 0;

  // setInterval(()=>{
  //     console.log('Service Worker Ping', ++count);
  // }, 1000)

  const urlsToCache = ["index.html", "manifest.json", "sw.js", "src/index.js"]
  event.waitUntil(
    caches.open("my-cache1").then((cache) => {
      return cache.addAll(urlsToCache)
    })
  )
})

// eslint-disable-next-line no-restricted-globals
self.addEventListener("fetch", (event) => {
  console.log("Fetch of: ", event.request.url)

  event.respondWith(
    // the response is resolved to null if there is no match
    caches.match(event.request).then((response) => {
      var res = response

      if (!res) {
        console.log(event.request.url, "- NOT IN CACHE, FETCHED FROM NETWORK!")
        res = fetch(event.request)
      } else {
        console.log(event.request.url, "FOUND IN CACHE")
      }
      return res
    })
  )
})
