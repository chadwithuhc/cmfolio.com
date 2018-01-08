import React from 'react'
import { Link } from 'react-router-dom'
import data from '../data/index'

function Project({ site, page, match }) {
  page = data.getCurrentPage()
  page.currentProject = page.projects.find(proj => proj.id === match.params.projectId)

  return (
    <section key={Date.now()} className="content contentMain clearfix">
      {page.intro && page.intro.length ?
        <header>
          <article className="notes">
            <h1 className="notes-title">Notes:</h1>
            <p className="type">
              {page.intro.map((line, i) => {
                return (
                  <span key={i} className="notes-lineItem" dangerouslySetInnerHTML={{__html:line}}></span>
                )
              })}
            </p>
          </article>
          <hr className="hBar" v-if="page.intro && page.intro.length" />
        </header>
        : null}

    	<aside className="sidebar">
    		<p className="linkNav">
    			<strong className="linkNav-title">{page.projectsLabel || `Projects`}</strong><br />
    			{page.projects.map(project => {
            return (
              <Link key={project.id} to={project.id} className="linkNav-link" data-pid={project.id}>{project.name}</Link>
            )
          })}
    		</p>
    	</aside>

    	<section className="content">

    		<div id="projects">
    			<h1 id="projects-title">{page.projectsLabel || `Projects`}</h1>
    			{(page.currentProject ? [page.currentProject] : page.projects).map(project => {
            return (
              <div key={project.id} id={project.id} className="projectBlock">
        				<h2 className="projectBlock-title">{project.name}</h2>
        				<p className="notes">
                  {project.descArray.map((line, i) => {
                    return (
                      <span key={i} className="notes-lineItem" dangerouslySetInnerHTML={{__html:line}}></span>
                    )
                  })}
                </p>
        				<div className="projectBlock-sidebox">
        					<h2 className="projectBlock-titleAlt">{project.type}</h2>
        					<ul className="notes">
                    {project.tech.map((item, i) => {
                      return (
                        <li key={i} className="bulletList-item">{item}</li>
                      )
                    })}
                  </ul>
        				</div>
        				<a href={project.link} className="projectBlock-link" target="_blank" rel="noopener noreferrer" dangerouslySetInnerHTML={{__html:project.link_desc}}></a>
        			</div>
            )
          })}
    		</div>
    	</section>
    </section>
  )
}

export default Project
