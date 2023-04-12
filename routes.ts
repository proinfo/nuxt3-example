import { CACHE_ASSETS, CACHE_PAGES } from './src/cache'
import { Router } from '@edgio/core'
import { nuxtRoutes } from '@edgio/nuxt-nitro'
import Request from '@edgio/core/router/Request'

export default new Router()

  // Redirects for New Website
  .match(
    {path: '/', cookies: { country: 'us' }},
    ({redirect, setResponseHeader}) => {
      setResponseHeader('cache-control', 'Cache-Control: no-store, no-cache, must-revalidate')
      setResponseHeader('Pragma', 'no-cache')
      redirect('/us', 301);
    })

  .match(
    {path: '/',},
    ({redirect, setResponseHeader}) => {
      setResponseHeader('cache-control', 'Cache-Control: no-store, no-cache, must-revalidate')
      setResponseHeader('Pragma', 'no-cache')
      redirect('/uk', 301);
    })

  .match({ path: '/:one/' }, ({ cache, compute, redirect }) => {
    redirect('/:one', 301);
  })

  .match({ path: '/uk', cookies: { country: 'us'  }},
  ({ setResponseHeader, redirect }) => {
    setResponseHeader('cache-control', 'Cache-Control: no-store, no-cache, must-revalidate')
    setResponseHeader('Pragma', 'no-cache')
    redirect('/us', 301);
  })

  .match({ path: '/us', cookies: { country: 'uk'  }},
  ({ setResponseHeader, redirect }) => {
    setResponseHeader('cache-control', 'Cache-Control: no-store, no-cache, must-revalidate')
    setResponseHeader('Pragma', 'no-cache')
    redirect('/uk', 301);
  })

  .match({path: '/:path(uk|us|row|manifest|service-worker|assets)'}, ({renderWithApp, cache}) => {
    cache(CACHE_PAGES)
    renderWithApp()
  })

  .match({path: '/:lang(uk|us)/:path*'}, ({renderWithApp, cache}) => {
    cache(CACHE_PAGES)
    renderWithApp()
  })
  .match({path: '/_nuxt/:path*'}, ({renderWithApp, cache}) => {
    cache(CACHE_PAGES)
    renderWithApp()
  })

  .match({ path: '/:path*', cookies: { country: 'us'  }},
  ({ setResponseHeader, redirect }) => {
    setResponseHeader('cache-control', 'Cache-Control: no-store, no-cache, must-revalidate')
    setResponseHeader('Pragma', 'no-cache')
    redirect('/us/' + ':path*', 301);
  })

  .match({ path: '/:path*' }, ({ setResponseHeader, redirect }) => {
    setResponseHeader('cache-control', 'Cache-Control: no-store, no-cache, must-revalidate')
    setResponseHeader('Pragma', 'no-cache')
    redirect('/uk/' + ':path*', 301);
  })


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


.use(nuxtRoutes)
