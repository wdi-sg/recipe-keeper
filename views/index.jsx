import React, { useState } from 'react'
import { Head } from '@react-ssr/express'
import Nav from './partials/_nav'
import '../public/styles/base.scss'

const Index = ({ props }) => {
  const [message, setMessage] = useState('')
  const onClick = () => setMessage('This is a react-ssr!')
  return (
    <React.Fragment>
      <Head>
        <title>KNN's Recipe Keeper App</title>
      </Head>
      <header>
        <Nav/>
      </header>
      <section className="hero hero is-small is-primary is-bold">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">
              KNN's Recipe Keeper
            </h1>
          </div>
        </div>
        <div className="container">

        </div>
      </section>
      <div className="container">

        <p className="subtitle">
          You do not have recipes yet.
          {/*{message}*/}
        </p>
        <p className="subtitle">
          Do you want to add some?
        </p>
        <button
          className="button is-primary"
          onClick={onClick}
        >
          Click Me
        </button>
      </div>
    </React.Fragment>
  );
};

export default Index;