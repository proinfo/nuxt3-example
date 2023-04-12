import { skipWaiting, clientsClaim } from 'workbox-core'
import { precacheAndRoute } from 'workbox-precaching'
import { Prefetcher } from '@edgio/prefetch/sw'

skipWaiting()
clientsClaim()
precacheAndRoute([{"revision":"7bedde6d9476a6d5e08ab02f3339d1e0","url":"_nuxt/entry.6063ee13.js"},{"revision":"98abfb29a374bbb797b6dd8deef565a3","url":"_nuxt/error-404.23f2309d.css"},{"revision":"37c400ae03514870f9005e06162da61f","url":"_nuxt/error-404.9f635153.js"},{"revision":"fab6d0e26b0763e4498a1d01029bc605","url":"_nuxt/error-500.5b8f60d8.js"},{"revision":"7edc7f81442873d975e62f2389bb9c71","url":"_nuxt/error-500.aa16ed4d.css"},{"revision":"7c40ee67c240b0b2ebf33f92b3e0a157","url":"_nuxt/error-component.1603cecc.js"},{"revision":"e7adcdea34718e22bc1721bbcd32bc73","url":"_nuxt/index.594754f0.js"},{"revision":"d9a657d4061c04ffc1071d89d880c34c","url":"_nuxt/index.5a42e3ce.js"},{"revision":"b7836552799cf0940fc439ad8114ea07","url":"_nuxt/index.75cfd548.js"},{"revision":"c4c250b77d7110d736de16c5a2cd1fc5","url":"_nuxt/index.bed17a9b.js"},{"revision":"5388d957d6ab018b8df8ca26180c833d","url":"_nuxt/nuxt-link.f94653d3.js"},{"revision":"eed1e2511aa2ca7d9fcc8248dddc0592","url":"_nuxt/test.042bc3b0.js"},{"revision":"7bc711f6a897e217b9c612a3c2b23db6","url":"_nuxt/test.f6dff274.js"}] || [])

new Prefetcher().route()
