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
    <hr className="hBar" />
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
    <hr className="hBar" />
    <section className="content contentMain contentLikes">
      <article className="notes">
        <h1 className="notes-title">Currently, I am learning:</h1>
        <p className="type">
          {page.currently_i_am_learning.map((line, i) => {
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
        <h1 className="notes-title">Recently, I updated:</h1>
        <p className="type">
          {page.recently_i_updated.map((line, i) => {
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
