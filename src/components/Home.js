import React from 'react'

function Home({ site, page }) {
  return (
    <article>
    <section className="content contentMain clearfix">
      <article className="notes">
        <h1 className="notes-title">Notes:</h1>
        <p className="type">
          {page.intro.map((line, i) => {
            return <span key={i} className="notes-lineItem" dangerouslySetInnerHTML={{__html:line}}></span>
          })}
        </p>
      </article>
    </section>
    <section className="content contentMain contentLikes">
      <article className="notes">
        <h1 className="notes-title">Currently, I am working on:</h1>
        <p className="type">
          {page.currently_i_am_working_on.map((line, i) => {
            return (
              <span key={i} className="notes-lineItem" dangerouslySetInnerHTML={{__html:line}}></span>
            )
          })}
        </p>
      </article>
    </section>
    </article>
  )
}

export default Home
