importScripts(
  "https://storage.googleapis.com/workbox-cdn/releases/4.3.0/workbox-sw.js"
);

importScripts("/precache-manifest.f6d36793e6570100ac4a0d2290b794fd.js");

self.addEventListener("message", (event) => {
  if (event.data && event.data.type === "SKIP_WAITING") {
    self.skipWaiting();
  }
});

workbox.core.clientsClaim();

self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerNavigationRoute(
  workbox.precaching.getCacheKeyForURL("/index.html"),
  {
    blacklist: [/^\/_/, /\/[^\/]+\.[^\/]+$/]
  }
);
