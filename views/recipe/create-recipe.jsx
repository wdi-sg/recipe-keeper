import React, { Component } from 'react'
import { Head } from '@react-ssr/express'
import Nav from '../partials/_nav'
import '../../public/styles/base.scss'

class CreateRecipe extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <React.Fragment>
        <Head>
          <title>Recipe Keeper - create</title>
        </Head>
        <header>
          <Nav/>
        </header>

        <section className='section is-medium'>
          <div className="container">
            <h1 className="title has-text-primary">New Recipe</h1>
            <div className="columns">
              <form action="/recipes/add" className="column is-two-thirds">

                <div className="field">
                  <label htmlFor="recipe-name" className="label">Name</label>
                  <div className="control">
                    <input type="text" className="input" placeholder="Give an awesome name."/>
                  </div>
                </div>
                <div className="field">
                  <label htmlFor="recipe-instructions" className="label">
                    Instructions
                  </label>
                  <div className="control">
                    <textarea name="" id="" cols="30" rows="10" className="textarea"></textarea>
                  </div>
                </div>

              </form>
            </div>
          </div>
        </section>
      </React.Fragment>
    )
  }

}

export default CreateRecipe