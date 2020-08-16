import React from 'react'
import LightSwitch from './LightSwitch'

function Footer({ site }) {
  const { socialLinks = [] } = site

  return (
    <footer className="footer">
      <hr/>
      &copy; <a href="http://hydehandcrafted.com/" target="_blank" rel="noopener noreferrer">2003</a>-{(new Date()).getFullYear()} cmfolio.com
      <nav className="social-links">
        {socialLinks.map(link => (
          <a href={link.url} title={link.name} target="_blank" rel="noreferrer noopener"><i className={`fa ${link.icon}`} /></a>
        ))}
      </nav>
      <LightSwitch />
    </footer>
  )
}

export default Footer
