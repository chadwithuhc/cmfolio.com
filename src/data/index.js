import site from './site'
import resumes from './resumes/index'

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
  },

  getProjectFromPage(projectName, page) {
    if (!projectName || !page.projects) {
      return null
    }

    return page.projects.find(proj => proj.id === projectName)
  },

  getResume(companyId) {
    if (resumes.hasOwnProperty(companyId)) {
      return resumes[companyId]
    }

    return null
  },

  getResumePage() {
    const [, pageName, companyId] = window.location.pathname.split(`/`)

    if (!companyId && pageName !== 'resume') {
      return null
    }

    const page = this.getResume(companyId)

    // Redirect on incorrect page URL
    if (!page) {
      window.location.replace(`/`)
      // throw new Error(`Page Not Found: ${companyId}`)
    }

    return page
  }

}
