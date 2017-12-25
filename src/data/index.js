import site from './site'

export default {

  getAll() {
    return site
  },

  getPage(pageName) {
    if (site.pages.hasOwnProperty(pageName)) {
      return site.pages[pageName]
    }

    return null
  },

  getCurrentPage() {
    const pageName = window.location.pathname === `/` ?
'home' : window.location.pathname.split(`/`)[1]
    const page = this.getPage(pageName)

    if (!page) {
      window.location.replace(`/`)
      // throw new Error(`Page Not Found: ${pageName}`)
    }

    return page
  }

}
