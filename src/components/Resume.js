import React from 'react'

function Resume({ site, page }) {
  return (
    <article>
    <header className="resume-header">
      <h1 className="resume__title">
        <strong>{page.contact.name}</strong> is looking to be <br/>
        the next <strong>{page.position}</strong> <br/>
        at <strong>{page.companyName}</strong>
      </h1>

      {/* <h2>{page.contact.email}</h2>
      <h3>{page.contact.website}</h3>
      <h4><span className="fa fa-github"></span> {page.contact.code}</h4> */}
    </header>
    <section className="resume-profile">
      <article className="notes">
        <h1 className="notes-title">Professional Profile:</h1>
        <p className="type">
          {page.professional_profile.map((line, i) => {
            return <span key={i} className="notes-lineItem" dangerouslySetInnerHTML={{__html:line}}></span>
          })}
        </p>
      </article>
    </section>
    <hr className="hBar" />
    <section className="resume-content">
      <article className="notes resume-skills">
        <h1 className="notes-title">Skills:</h1>
        <p className="type">
          {page.skills.map((line, i) => {
            return (
              <span key={i} className="resume-skills__tag" dangerouslySetInnerHTML={{__html:line}}></span>
            )
          })}
        </p>
      </article>
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
              {/* <hr className="hBar" /> */}
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
        Print it or view it online at <strong>cmfolio.com/resume/{page.companyId}</strong>
      </p>
    </footer>
    </article>
  )
}

export default Resume
