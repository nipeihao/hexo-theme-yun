/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "d7c8a6a28b1484e31a8c50c3122b9dd7"
  },
  {
    "url": "about.html",
    "revision": "6065d2840b213502b531411a41bb361f"
  },
  {
    "url": "assets/css/0.styles.ab1aa851.css",
    "revision": "0794aafa8116bccb265eb186af8a5eb5"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.e76c5187.js",
    "revision": "b81080a687c1c9d488d7243ca1be64b4"
  },
  {
    "url": "assets/js/11.2d25437a.js",
    "revision": "75301a77045c470863f7b679bd1a9ab4"
  },
  {
    "url": "assets/js/12.11ea5c25.js",
    "revision": "b2e4c536f5a74edf9054b06fc6b2bbc0"
  },
  {
    "url": "assets/js/13.88c385cd.js",
    "revision": "14006102678e31d2418ea8a4606dc7f2"
  },
  {
    "url": "assets/js/14.27e875b5.js",
    "revision": "7b82436b7d9ac6586ba9b4fe7dbfff53"
  },
  {
    "url": "assets/js/15.a6deaf89.js",
    "revision": "fbd85e072c7ce1a2a027ebe85f5e52f7"
  },
  {
    "url": "assets/js/16.21ac5f52.js",
    "revision": "a347b68d6e4106cea3d0ae2d083f9d18"
  },
  {
    "url": "assets/js/17.0b3292c1.js",
    "revision": "8548ed71cee8a137de01221c8a7b14ef"
  },
  {
    "url": "assets/js/18.eb1246c5.js",
    "revision": "b0722846c801d8563024f8933675d37d"
  },
  {
    "url": "assets/js/19.58c04d86.js",
    "revision": "62a137da2b3e2c628ea40b98909eb291"
  },
  {
    "url": "assets/js/20.bd8b4ed2.js",
    "revision": "5fa6363bea1ecef4c1dad08e2a3893eb"
  },
  {
    "url": "assets/js/21.7961b743.js",
    "revision": "9f1a217ee37f1651af16690e346173ab"
  },
  {
    "url": "assets/js/22.b9a70315.js",
    "revision": "320a5a347b516bee0852e03642998426"
  },
  {
    "url": "assets/js/23.82cf7b17.js",
    "revision": "a5f31f4ed2ed64f5d8a5b46e54604330"
  },
  {
    "url": "assets/js/24.ffadd01d.js",
    "revision": "535a42833020dc39aaf09cce6e15e3f2"
  },
  {
    "url": "assets/js/25.0814b78f.js",
    "revision": "8fb2d206f68f543d2a0c218de764f393"
  },
  {
    "url": "assets/js/26.7b86892d.js",
    "revision": "f5ba6edd9456417370b2f6b646a44d41"
  },
  {
    "url": "assets/js/27.000dcac1.js",
    "revision": "475d401429980106c52dea43ea13b9ef"
  },
  {
    "url": "assets/js/28.acef8732.js",
    "revision": "a914aa27e37bcb3be1618dc8b05e4af3"
  },
  {
    "url": "assets/js/29.dcc462ba.js",
    "revision": "c1a20cc85f2af6ccc80616f5b62dcd7c"
  },
  {
    "url": "assets/js/3.c098dc85.js",
    "revision": "863e8f1b6278d51fb426c0f213bc1954"
  },
  {
    "url": "assets/js/30.697abe1f.js",
    "revision": "78c6898deb7c5a72d312ce70ed1c1774"
  },
  {
    "url": "assets/js/31.e3e8f009.js",
    "revision": "1734778f096d723b48940c4fb6f4818c"
  },
  {
    "url": "assets/js/32.fe78be52.js",
    "revision": "e3e16b7300b9249c4b7cdbfba720a383"
  },
  {
    "url": "assets/js/4.520eab72.js",
    "revision": "e6775686ac49c038afaee0b46aa13f51"
  },
  {
    "url": "assets/js/5.75434a36.js",
    "revision": "5f4bdeb33c172508ebe06aeb352f5410"
  },
  {
    "url": "assets/js/6.f67dffa3.js",
    "revision": "53e24e6634c9abfd7c83a1464b334eef"
  },
  {
    "url": "assets/js/7.62ec3e83.js",
    "revision": "94a153e2da66781b81867bd3f5177835"
  },
  {
    "url": "assets/js/8.b9a76b52.js",
    "revision": "50b0dd4770fc993258d2f2ee676d8e02"
  },
  {
    "url": "assets/js/9.320bdd75.js",
    "revision": "85ab2f043ddc28e104eb262dfefe6bb7"
  },
  {
    "url": "assets/js/app.516d69f1.js",
    "revision": "0014bab73473b9ceaa9275926ac95092"
  },
  {
    "url": "assets/js/vendors~docsearch.cdcb6b19.js",
    "revision": "98a40a050a2241279f9a780c3d63b30a"
  },
  {
    "url": "demo.html",
    "revision": "c91dcbc9956a49cf4420876bebce5d97"
  },
  {
    "url": "en/about.html",
    "revision": "63a2c312fe6c16e53c26c4576271584b"
  },
  {
    "url": "en/guide/additional-package-support.html",
    "revision": "83e872d93d3dcc7915bb4f7872843857"
  },
  {
    "url": "en/guide/config.html",
    "revision": "81be077d4f379d9be1d4b1e85e7dd980"
  },
  {
    "url": "en/guide/faq.html",
    "revision": "36224de6761ac9fd3a77bd69554c59ce"
  },
  {
    "url": "en/guide/icon.html",
    "revision": "98a0f8535923664f34a7a1910630f0e8"
  },
  {
    "url": "en/guide/index.html",
    "revision": "d7328d828ef4fc6542d7e8de6bab65b2"
  },
  {
    "url": "en/guide/page.html",
    "revision": "533376924613ac687165fab0129d0c6f"
  },
  {
    "url": "en/guide/third-party-support.html",
    "revision": "078c60be9d54132967cd68176fee339b"
  },
  {
    "url": "en/index.html",
    "revision": "31fe6bd214b06aec2f31d9f49211a758"
  },
  {
    "url": "guide/additional-package-support.html",
    "revision": "d769405b3e85f3d531e49895fbffc3d8"
  },
  {
    "url": "guide/config.html",
    "revision": "0adda04f5d944167b6dfd7f8467ce186"
  },
  {
    "url": "guide/faq.html",
    "revision": "514ad02101b5ee9d5ba391f09ed64642"
  },
  {
    "url": "guide/icon.html",
    "revision": "1001605a278ca82567993e474197427b"
  },
  {
    "url": "guide/index.html",
    "revision": "75c10cf3229e4ff077553cf14a6cbbf5"
  },
  {
    "url": "guide/migrate.html",
    "revision": "d36baef4c1932e8b70ac0ae6f27f4cc6"
  },
  {
    "url": "guide/page.html",
    "revision": "3dd39732bd115d342b643d26e0067626"
  },
  {
    "url": "guide/third-party-support.html",
    "revision": "8b1254b6de7dd8e87d054be7d97f7be6"
  },
  {
    "url": "images/index-preview.jpg",
    "revision": "7c5199d9f75605f77990cf7a984eaf0f"
  },
  {
    "url": "images/mickey-mouse.jpg",
    "revision": "c636a5e47f7a741a28a57ff22c98ceac"
  },
  {
    "url": "index.html",
    "revision": "3a00dc7f805ae43dbce68f708dfc7057"
  },
  {
    "url": "logo.gif",
    "revision": "36e0231044c40383b466997c8f13b6d7"
  },
  {
    "url": "yun.svg",
    "revision": "ebbd22f3cde555d95e5dec5d41ed8505"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
