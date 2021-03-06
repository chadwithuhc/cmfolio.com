import React from 'react'
import { Link } from 'react-router-dom'
import data from '../data/index'

function Header({ site, page }) {
  page = data.getCurrentPage()

  if (!page.projects) {
    return null
  }

  return (
    <header className="pageHeader">
    	<nav className="logoBlock">
    		<Link to="/" className="avatar">
          <img className="cm-logo-svg" src="/images/cm-logo.svg" width="100" alt="cm logo" />
    		</Link>
    	</nav>
    	<ul className="blockNav">
        {site.navLinks.map(link => {
          return (
            <li key={link.url} className="blockNav-item">
        			<Link to={link.url} className={`blockNav-link type-header ${window.location.pathname === link.url ? 'is-active' : ''}`}><span className="blockNav-title">{link.name}</span> <span className="blockNav-linkSmall">{link.description}</span></Link>
        		</li>
          )
        })}
    	</ul>
    	{/* <ul className="linkNav">
    		{page.projects.map(project => {
          return (
            <li key={project.id} className="linkNav-item">
        			<Link to={`./${project.id}`} className="linkNav-link type"><span>{project.name}</span></Link>
        		</li>
          )
        })}
    	</ul> */}
      <hr/>
    </header>
  )
}

export default Header
