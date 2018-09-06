import React from 'react'
import Header from './Header'
import Footer from './Footer'

function Home({ site, page }) {
  return (
    <article>
    <Header site={site} page={page} />
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
        <h1 className="notes-title">Currently, I am mastering:</h1>
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
    <Footer />
    </article>
  )
}

export default Home
