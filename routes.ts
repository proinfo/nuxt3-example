import { CACHE_ASSETS, CACHE_PAGES } from './src/cache'
import { Router } from '@edgio/core'
import { nuxtRoutes } from '@edgio/nuxt-nitro'
import Request from '@edgio/core/router/Request'

export default new Router()

  // .match(
  //   '/uk/c/clothing',
  //   ({ cache, removeUpstreamResponseHeader, proxy, updateResponseHeader, updateUpstreamResponseCookie }) => {
  //     updateResponseHeader('location', /https:\/\/thewhitecompany.com\//gi, '/')
  //     updateResponseHeader('location', /https:\/\/www.thewhitecompany.com\//gi, '/')
  //     updateUpstreamResponseCookie('geolocation', /domain=.+;/, '')
  //     proxy('origin')
  //   }
  // )

  .match(
    {path: '/', cookies: { country: 'us' }},
    ({redirect}) => {redirect('/us', 301);})

  .match(
    {path: '/',},
    ({redirect}) => {redirect('/uk', 301);})

  .match({ path: '/:one/' }, ({ cache, compute, redirect }) => {
    cache(CACHE_PAGES)
    redirect('/:one', 301);
  })

  .match({path: '/:path(uk|us|row|manifest|service-worker|assets)'}, ({renderWithApp, cache}) => {
    cache(CACHE_PAGES)
    renderWithApp()
  })

  .match({ path: '/:uspath', cookies: { country: 'us'  }},
  ({ cache, redirect }) => {
    cache(CACHE_PAGES)
    redirect('/us/' + ':uspath', 301);
  })

  .match({ path: '/:one' }, ({ cache, redirect }) => {
    cache(CACHE_PAGES)
    redirect('/uk/' + ':one', 301);
  })

.use(nuxtRoutes)
