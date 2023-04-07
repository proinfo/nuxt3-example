import { skipWaiting, clientsClaim } from 'workbox-core'
import { precacheAndRoute } from 'workbox-precaching'
import { Prefetcher } from '@edgio/prefetch/sw'

skipWaiting()
clientsClaim()
precacheAndRoute([{"revision":"6fcb2453a5c1e1c52476fff539876763","url":"_nuxt/entry.946d8fd0.js"},{"revision":"98abfb29a374bbb797b6dd8deef565a3","url":"_nuxt/error-404.23f2309d.css"},{"revision":"9ab61e1c00a839458d8e42232bd7c753","url":"_nuxt/error-404.81f2c8f4.js"},{"revision":"c09b33e3c38f0a186e4738c06158b39d","url":"_nuxt/error-500.17c01498.js"},{"revision":"7edc7f81442873d975e62f2389bb9c71","url":"_nuxt/error-500.aa16ed4d.css"},{"revision":"8b668eaa0cefb19839dd37a31185ac31","url":"_nuxt/error-component.b4d3c6be.js"},{"revision":"310d85ed6185964ea89328347123a605","url":"_nuxt/index.010d193c.js"},{"revision":"19348b8d5441711873b8a25ccb66fa92","url":"_nuxt/index.82e38597.js"},{"revision":"7611b7e00495b2a063e63b9611fb2058","url":"_nuxt/nuxt-link.4d029d2e.js"},{"revision":"28abc752553ec1475c875e60b58c72fa","url":"_nuxt/test.081f0ed8.js"},{"revision":"6062b287ba847c40ba40bdc80c6c8e0d","url":"_nuxt/test.0dae513e.js"}] || [])

new Prefetcher().route()
