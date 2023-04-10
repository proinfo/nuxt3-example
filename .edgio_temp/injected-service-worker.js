import { skipWaiting, clientsClaim } from 'workbox-core'
import { precacheAndRoute } from 'workbox-precaching'
import { Prefetcher } from '@edgio/prefetch/sw'

skipWaiting()
clientsClaim()
precacheAndRoute([{"revision":"055c005f952a3866d5e5857841c9abd8","url":"_nuxt/entry.3ef90a23.js"},{"revision":"98abfb29a374bbb797b6dd8deef565a3","url":"_nuxt/error-404.23f2309d.css"},{"revision":"15c98b48e036a26dcb6bb08f8ccc7c64","url":"_nuxt/error-404.c40c6319.js"},{"revision":"4e87068fc4ecfebff73fe021196fd861","url":"_nuxt/error-500.2f877ce6.js"},{"revision":"7edc7f81442873d975e62f2389bb9c71","url":"_nuxt/error-500.aa16ed4d.css"},{"revision":"1eaed07d9b452043e286a2657362ec5d","url":"_nuxt/error-component.83bf23df.js"},{"revision":"ba938dee6cb401ecd44eb0d92f82d05b","url":"_nuxt/index.84a66aaa.js"},{"revision":"5a86b24a8dacc956917bd7bb7bb92bb9","url":"_nuxt/index.f7bf4561.js"},{"revision":"8a98cb35348afdab2dc8f3930ae41d28","url":"_nuxt/nuxt-link.b4b5e54d.js"},{"revision":"1237aa746fd4a7112a240ab7de560732","url":"_nuxt/test.0e6c9c4e.js"},{"revision":"aad5ff3cbcce80486332f5621bc15fa9","url":"_nuxt/test.2cf25fe1.js"}] || [])

new Prefetcher().route()
