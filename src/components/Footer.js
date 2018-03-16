import React from 'react'

function Footer() {
  return (
    <footer className="footer">
      <hr/>
      &copy; <a href="http://hydehandcrafted.com/" target="_blank" rel="noopener noreferrer">2003</a>-{(new Date()).getFullYear()} cmfolio.com &mdash; contact: <a href="mailto:chad@cmfolio.com">chad@cmfolio.com</a>
    </footer>
  )
}

export default Footer
