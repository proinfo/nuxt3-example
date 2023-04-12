import { skipWaiting, clientsClaim } from 'workbox-core'
import { precacheAndRoute } from 'workbox-precaching'
import { Prefetcher } from '@edgio/prefetch/sw'

skipWaiting()
clientsClaim()
precacheAndRoute([{"revision":"da0e758f2b172d70ed66db3333a6fef9","url":"_nuxt/entry.8f1192ab.js"},{"revision":"98abfb29a374bbb797b6dd8deef565a3","url":"_nuxt/error-404.23f2309d.css"},{"revision":"f680ffc1626c2b888f54e7b6b3501bc8","url":"_nuxt/error-404.563c4841.js"},{"revision":"7edc7f81442873d975e62f2389bb9c71","url":"_nuxt/error-500.aa16ed4d.css"},{"revision":"722cd380da7816d89ac2e87b41fac750","url":"_nuxt/error-500.c986476a.js"},{"revision":"35ba2f34437bda700ea8af8b76ec4f40","url":"_nuxt/error-component.82ad6899.js"},{"revision":"54e7dc83242b18c3ede28da2e9f1bb95","url":"_nuxt/index.63474eef.js"},{"revision":"bb6b391e3491053e8d490fd46477ef06","url":"_nuxt/index.b5d68cc3.js"},{"revision":"dbab3e5c55f6f751c3b21fe243daec85","url":"_nuxt/index.d7d8c096.js"},{"revision":"66470bf7f931eb6219eb6c1508c1d796","url":"_nuxt/index.f21823fa.js"},{"revision":"87dbae86f1f50b0c63875b7a4127391d","url":"_nuxt/nuxt-link.42955f79.js"},{"revision":"74215786e45c818c2eef7edc65fc6564","url":"_nuxt/test.40c6b603.js"},{"revision":"b57fd34fba15dd1a5fc0680064897894","url":"_nuxt/test.5e2b4977.js"}] || [])

new Prefetcher().route()
