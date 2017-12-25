import React, { Component } from 'react'
import Routes from './Routes'
import './css/site.css'

class App extends Component {
  render() {
    return (
      <section>
        <Routes />
        <footer className="footer">
          &copy; <a href="http://hydehandcrafted.com/" target="_blank" rel="noopener noreferrer">2003</a>-{(new Date()).getFullYear()} cmfolio.com &mdash; contact: <a href="mailto:chad@cmfolio.com">chad@cmfolio.com</a>
        </footer>
      </section>
    )
  }
}

export default App
