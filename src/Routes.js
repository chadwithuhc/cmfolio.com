import React from 'react'
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import { PropsRoute } from 'react-router-with-props'
import Home from './components/Home'
import Resume from './components/Resume'
import Project from './components/Project'
import data from './data/index'

function Routes() {
  return (
    <Router>
      <div>
        <Switch>
          <PropsRoute exact path="/" component={Home}
            site={data.getAll()} page={data.getPage('home')} />
          {/* <PropsRoute exact path="/resume" component={Resume}
            site={data.getAll()} page={data.getPage('resume')} /> */}
          <PropsRoute exact path="/resume/:companyId" component={Resume}
            site={data.getAll()} page={data.getResumePage()} />
          <PropsRoute exact path="/web" component={Project}
            site={data.getAll()} page={data.getPage('web')} />
          <PropsRoute exact path="/photo-video" component={Project}
            site={data.getAll()} page={data.getPage('photo-video')} />
          <PropsRoute exact path="/friends" component={Project}
            site={data.getAll()} page={data.getPage('friends')} />
          <PropsRoute exact path="/:pageName/:projectId" component={Project} site={data.getAll()} page={data.getCurrentPage()} />
          {/* <Redirect to="/404" /> */}
        </Switch>
      </div>
    </Router>
  )
}

export default Routes
