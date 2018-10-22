import React from 'react'

class LightSwitch extends React.Component {

  constructor(props) {
    super(props)

    this.setBodyClass()
    setTimeout(() => {
      document.body.classList.add('theme-loaded')
    }, 0)
    this.state = {
      darkTheme: window.localStorage.darkTheme === 'true'
    }
  }

  setBodyClass() {
    const { darkTheme } = window.localStorage
    if (darkTheme === 'true') {
      document.body.classList.add('dark-theme')
    }
    else {
      document.body.classList.remove('dark-theme')
    }
  }

  toggleBodyClass = () => {
    const { darkTheme } = window.localStorage
    let newTheme

    if (darkTheme === 'true') {
      newTheme = false
    } else {
      newTheme = true
    }
    this.setState({
      darkTheme: window.localStorage.darkTheme = newTheme
    })

    this.setBodyClass()
  }

  render() {
    return (
      <button className="light-switch" title="Swap light/dark mode" onClick={this.toggleBodyClass}>
        {this.state.darkTheme ? `🌝` : `🌚`}
      </button>
    )
  }
}

export default LightSwitch
