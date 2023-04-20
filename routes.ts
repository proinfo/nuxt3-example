import { CACHE_ASSETS, CACHE_PAGES, CACHE_REDIRECT } from './src/cache'
import { Router } from '@edgio/core'
import { nuxtRoutes } from '@edgio/nuxt-nitro'

export default new Router()

  .match('/_nuxt/:path*)', ({renderWithApp, setResponseHeader, cache, proxy}) => {
    setResponseHeader('sheba', 'testing')
    cache(CACHE_PAGES)
    renderWithApp()
  })

// Legacy
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
  .match('/TWCcommercewebservices/:path*', ({ proxy}) => {
    return proxy('origin', { path: '/TWCcommercewebservices/:path*' })
  })

  // Redirects
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
  // New Website URLs
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

  .match('/:path(row|manifest|service-worker|assets)', ({renderWithApp, cache}) => {
    cache(CACHE_PAGES)
    renderWithApp()
  })
  // **********************
  // END of Website URLs
  // **********************

  // Negative matching for proper path in order to avoid redirect
  .match({path: '/:lang(uk|us)/:path*'}, ({updateResponseHeader, updateUpstreamResponseCookie, proxy}) => {
    updateResponseHeader('location', /https:\/\/thewhitecompany.com\//gi, '/')
    updateResponseHeader('location', /https:\/\/www.thewhitecompany.com\//gi, '/')
    updateUpstreamResponseCookie('geolocation', /domain=.+;/, '')
    proxy('origin')
  })
  // Redirect for paths that don't have language
  .match({ path: '/:path((?!.*_nuxt).+)', cookies: { country: 'us'  }},
  ({ cache, redirect }) => {
    cache(CACHE_REDIRECT)
    redirect('/us/' + ':path*', 301);
  })
  .match({ path: '/:path((?!.*_nuxt).+)' }, ({ cache, redirect }) => {
    cache(CACHE_REDIRECT)
    redirect('/uk/' + ':path*', 301);
  })


.fallback(({ proxy, updateResponseHeader, updateUpstreamResponseCookie }) => {
  updateResponseHeader('location', /https:\/\/thewhitecompany.com\//gi, '/')
  updateResponseHeader('location', /https:\/\/www.thewhitecompany.com\//gi, '/')
  updateUpstreamResponseCookie('geolocation', /domain=.+;/, '')
  proxy('origin')
  //serveStatic('404/404.html') // Displays Out of Bounds for all pages that are not part of PIE (needs to be tested and adjusted for each project)
})


// .use(nuxtRoutes)
