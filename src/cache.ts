import { CustomCacheKey } from '@edgio/core/router'
const ONE_HOUR = 60 * 60
const ONE_DAY = 24 * ONE_HOUR
const ONE_YEAR = 365 * ONE_DAY


export const CACHE_REDIRECT = {
  key: new CustomCacheKey().addCookie('country'),
  edge: {
    maxAgeSeconds: ONE_YEAR,
  },
  browser: {
    caches: false,
    maxAgeSeconds: 0
  }
}

export const CACHE_PAGES = {
  edge: {
    maxAgeSeconds: ONE_HOUR,
  },
  browser: {
    maxAgeSeconds: 0,
    serviceWorkerSeconds: ONE_HOUR,
  },
}

export const CACHE_ASSETS = {
  edge: {
    maxAgeSeconds: ONE_DAY,
  },
  browser: {
    maxAgeSeconds: 0,
    serviceWorkerSeconds: ONE_DAY,
  },
}
