import React from 'react'

function Resume({ site, page }) {
  return (
    <article className="resume">
    <header className="resume-header">
      <section className="resume-header__title">
        <h2 className="resume-header__subtitle">
          Hi, {page.companyName}! I'm
        </h2>
        <h1 className="resume__title">
          <strong>{page.contact.name}</strong> <br/>
          <small>{page.position}</small>
        </h1>
        <nav className="resume-header__links">
          <a href="https://cmfolio.com/" rel="noreferer noopener"><i className="fa fa-fort-awesome"></i> {page.contact.email}</a>
          <a href="https://linkedin.com/in/chadwithuhc" rel="noopener noreferrer" target="_blank"><i className="fa fa-linkedin"></i> / chadwithuhc</a>
          <a href="https://github.com/chadwithuhc" rel="noopener noreferrer" target="_blank"><i className="fa fa-github"></i> / chadwithuhc</a>
        </nav>
        <hr className="hBar" />
        <section className="resume-profile">
          <article className="notes">
            <h1 className="notes-title">Profile:</h1>
            <p className="type">
              {page.professional_profile.map((line, i) => {
                return <span key={i} className="notes-lineItem" dangerouslySetInnerHTML={{__html:line}}></span>
              })}
            </p>
          </article>
        </section>
      </section>
      <section className="resume-skills">
        {page.skills.map(skill => {
          return (
            <i key={skill} className={`${skill}`}></i>
          )
        })}
      </section>
    </header>
    <hr className="hBar" />
    <section className="resume-content">
      <article className="notes resume-jobs">
        <h1 className="notes-title">Experiences:</h1>
        {page.experiences.map((job, i) => {
          return (
            <div key={i} className="type resume-job">
              <header className="resume-job__header">
                <h2 className="resume-job__company">{job.company}</h2>
                <h3 className="resume-job__position">{job.position}</h3>
              </header>
              <section className="resume-job__roles">
                <h4 className="resume-job__subtitle">Roles:</h4>
                {job.roles.split(', ').map(role => {
                  return (
                    <span key={role} className="resume-job__tag">{role}</span>
                  )
                })}
              </section>
              <section className="resume-job__highlights">
                <h4 className="resume-job__subtitle">Highlights:</h4>
                {job.highlights.map((line, i) => {
                  return (
                    <span key={i} className="notes-lineItem" dangerouslySetInnerHTML={{__html:line}}></span>
                  )
                })}
              </section>
            </div>
          )
        })}
      </article>
    </section>
    <hr className="hBar" />
    <footer className="resume__footer">
      <p>
        This page was personally designed for <strong>{page.companyName}</strong>
        <br/>
        Print and view it online at <strong>https://cmfolio.com/resume/{page.companyId}</strong>
      </p>
    </footer>
    </article>
  )
}

export default Resume
