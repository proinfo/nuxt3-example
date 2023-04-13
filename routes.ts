import { CACHE_ASSETS, CACHE_PAGES, CACHE_REDIRECT } from './src/cache'
import { Router } from '@edgio/core'
import { nuxtRoutes } from '@edgio/nuxt-nitro'

export default new Router()

  // Legacy - Perfect Proxy Category page
  .match(
    '/uk/c/:cat',
    ({ cache, removeUpstreamResponseHeader, proxy, updateResponseHeader, updateUpstreamResponseCookie }) => {
      updateResponseHeader('location', /https:\/\/thewhitecompany.com\//gi, '/')
      updateResponseHeader('location', /https:\/\/www.thewhitecompany.com\//gi, '/')
      updateUpstreamResponseCookie('geolocation', /domain=.+;/, '')
      proxy('origin')
    }
  )
  // Legacy - Fixing relative paths
  .match('/uk/api/:path*', ({ cache, proxy }) => {
    return proxy('origin', { path: '/uk/api/:path*' })
  })
  .match('/uk/header/:path*', ({ cache, proxy }) => {
    return proxy('origin', { path: '/uk/header/:path*' })
  })
  .match('/_ui/:path*', ({ cache, proxy }) => {
    return proxy('origin', { path: '/_ui/:path*' })
  })
  .match('/uk/twccmsservice/:path*', ({ cache, proxy }) => {
    return proxy('origin', { path: '/uk/twccmsservice/:path*' })
  })

  // Redirects for New Website
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

  .match({path: '/:path(uk|us|row|manifest|service-worker|assets|_nuxt)'}, ({renderWithApp, cache}) => {
    cache(CACHE_PAGES)
    renderWithApp()
  })

  .match({path: '/:lang(uk|us)/:path*'}, ({renderWithApp, cache}) => {
    cache(CACHE_PAGES)
    renderWithApp()
  })
  .match({ path: '/:path((?!.*_nuxt).+)', cookies: { country: 'us'  }},
  ({ cache, redirect }) => {
    cache(CACHE_REDIRECT)
    redirect('/us/' + ':path*', 301);
  })
  .match({ path: '/:path((?!.*_nuxt).+)' }, ({ cache, redirect }) => {
    cache(CACHE_REDIRECT)
    redirect('/uk/' + ':path*', 301);
  })



.match({ path: '/uk/test'},
  ({ renderWithApp, cache }) => {
    cache(CACHE_REDIRECT)
    renderWithApp()
  })


.use(nuxtRoutes)
