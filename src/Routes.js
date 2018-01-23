import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { PropsRoute } from 'react-router-with-props'
import Header from './components/Header'
import Home from './components/Home'
import Project from './components/Project'
import data from './data/index'

function Routes() {
  return (
    <Router>
      <div>
        <PropsRoute path="/" component={Header}
          site={data.getAll()} page={data.getCurrentPage()} />
        <hr/>
        <PropsRoute exact path="/" component={Home}
          site={data.getAll()} page={data.getPage('home')} />
        <PropsRoute exact path="/:pageName" component={Project}
          site={data.getAll()} page={data.getCurrentPage()} />
        <PropsRoute exact path="/:pageName/:projectId" component={Project} site={data.getAll()} page={data.getCurrentPage()} />
        <hr className="hBar" />
      </div>
    </Router>
  )
}

export default Routes
