import React from 'react'

function Resume({ site, page }) {
  return (
    <article>
    <header className="content contentMain clearfix">
      <h1>{page.contact.name}</h1>
      <h2>{page.contact.email}</h2>
      <h3>{page.contact.website}</h3>
      <h4><span className="fa fa-github"></span> {page.contact.code}</h4>
    </header>
    <section className="content contentMain clearfix">
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
    <section className="content contentMain contentLikes">
      <article className="notes">
        <h1 className="notes-title">Skills:</h1>
        <p className="type">
          {page.skills.map((line, i) => {
            return (
              <span key={i} className="notes-lineItem" dangerouslySetInnerHTML={{__html:line}}></span>
            )
          })}
        </p>
      </article>
    </section>
    <hr className="hBar" />
    <section className="content contentMain contentLikes">
      <article className="notes">
        <h1 className="notes-title">Experiences:</h1>
        {page.experiences.map((job, i) => {
          return (
            <div key={i} className="type">
              <h2>{job.position}</h2>
              <h3>{job.company}</h3>
              <p>{job.startDate} ~ {job.endDate}</p>
              <p>{job.description}</p>
              <p>
                {job.highlights.map((line, i) => {
                  return (
                    <span key={i} className="notes-lineItem" dangerouslySetInnerHTML={{__html:line}}></span>
                  )
                })}
              </p>
            </div>
          )
        })}
      </article>
    </section>
    <hr className="hBar" />
    </article>
  )
}

export default Resume
