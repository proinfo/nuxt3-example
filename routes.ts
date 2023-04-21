import { CACHE_ASSETS, CACHE_PAGES, CACHE_REDIRECT } from './src/cache'
import { Router } from '@edgio/core'
import { nuxtRoutes } from '@edgio/nuxt-nitro'
import { isProductionBuild } from '@edgio/core/environment'

export default new Router()

  // **********************
  // Redirects
  // **********************
  .match(
    {path: '/', cookies: { country: 'us' }},
    ({redirect, cache}) => {
      cache(CACHE_REDIRECT)
      redirect('/us', 301);
    })
  .match(
    {path: '/',},
    ({redirect, cache}) => {
      cache(CACHE_REDIRECT)
      redirect('/uk', 301);
    })
  .match({ path: '/:one*/' }, ({ cache,redirect }) => {
    cache(CACHE_REDIRECT)
    redirect('/:one*', 301);
  })
  .match({ path: '/uk', cookies: { country: 'us'  }},
  ({ cache, redirect }) => {
    cache(CACHE_REDIRECT)
    redirect('/us', 301);
  })
  .match({ path: '/us', cookies: { country: 'uk'  }},
  ({ cache, redirect }) => {
    cache(CACHE_REDIRECT)
    redirect('/uk', 301);
  })
  // **********************
  // End of Redirects
  // **********************

  // **********************
  // Handle New Website
  // **********************
  .match(
    '/uk',
    ({ renderWithApp, cache }) => {
      cache(CACHE_PAGES)
      renderWithApp()
    }
  )
  .match(
    '/us',
    ({ renderWithApp, cache }) => {
      cache(CACHE_PAGES)
      renderWithApp()
    }
  )
  .match('/:lang/test',
    ({ renderWithApp, cache }) => {
    cache(CACHE_REDIRECT)
    renderWithApp()
  })
  // **********************
  // End of Handle New Website
  // **********************

  // Nuxt Routes for New website
  .use(nuxtRoutes)

  // **********************
  // Handle Legacy website
  // **********************
  .match({path: '/:lang(uk|us)/:path*'}, ({updateResponseHeader, updateUpstreamResponseCookie, proxy}) => {
      updateResponseHeader('location', /https:\/\/thewhitecompany.com\//gi, '/')
      updateResponseHeader('location', /https:\/\/www.thewhitecompany.com\//gi, '/')
      updateUpstreamResponseCookie('geolocation', /domain=.+;/, '')
      proxy('origin')
    })
  .match({ path: '/:path', cookies: { country: 'us'  }},
    ({ cache, redirect }) => {
      cache(CACHE_REDIRECT)
      redirect('/us/' + ':path*', 301);
    })
    .match({ path: '/:path' }, ({ cache, redirect }) => {
      cache(CACHE_REDIRECT)
      redirect('/uk/' + ':path*', 301);
    })
  .match('/:path*', ({setResponseHeader, removeUpstreamResponseHeader, proxy, updateResponseHeader, updateUpstreamResponseCookie }) => {
    updateResponseHeader('location', /https:\/\/thewhitecompany.com\//gi, '/')
    updateResponseHeader('location', /https:\/\/www.thewhitecompany.com\//gi, '/')
    updateUpstreamResponseCookie('geolocation', /domain=.+;/, '')
    proxy('origin')
  })
  // **********************
  // End of Handle Legacy website
  // **********************
