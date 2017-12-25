import React from 'react'
import { Link } from 'react-router-dom'
import data from '../data/index'

function Header({ site, page }) {
  page = data.getCurrentPage()

  return (
    <header className="pageHeader">
    	<nav className="logoBlock">
    		<Link to="/" className="avatar">
    			<img src="/images/avatar.png" alt="" width="150" height="150" className="no-highlight" /><br/>
    			<img src="/images/cm-logo.png" alt="cm" className="cm-logo no-highlight" width="30" />
    		</Link>
    	</nav>
    	<ul className="blockNav">
        {site.navLinks.map(link => {
          return (
            <li key={link.url} className="blockNav-item">
        			<Link to={link.url} className="blockNav-link type"><span className="blockNav-title">{link.name}</span> <span className="blockNav-linkSmall">{link.description}</span></Link>
        		</li>
          )
        })}
    	</ul>
    	<ul className="linkNav">
    		{page.projects.map(project => {
          return (
            <li key={project.id} className="linkNav-item">
        			<Link to={`./${project.id}`} className="linkNav-link type"><span>{project.name}</span></Link>
        		</li>
          )
        })}
    	</ul>
    </header>
  )
}

export default Header
