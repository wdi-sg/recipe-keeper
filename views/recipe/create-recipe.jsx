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

        <section className='section'>
          <div className="container is-fluid">
            <h1 className="title has-text-primary">New Recipe</h1>
            <form action="/recipes/add">

              <div className="field">
                <label htmlFor="recipe-name" className="label">Name</label>
                <div className="control">
                  <input type="text" className="input is-primary" placeholder="Give an awesome name."/>
                </div>
              </div>
              <div className="field">
                <label htmlFor="recipe-instructions" className="label">
                  Instructions
                </label>
                <div className="control">
                  <textarea name="" id="" className="textarea is-primary"></textarea>
                </div>
              </div>

              <div className="field is-grouped">
                <div className="control">
                  <div className="select is-primary">
                    <select name="" id="ingredient">
                      <option value="">Orange</option>
                    </select>
                  </div>
                </div>
                <div className="control">
                  <input type="input" id="ingredient-quantity" className='input' placeholder="Enter quantity"/>
                </div>
                <div className="control">
                  <input type="text" className="input" placeholder="Enter Unit eg. grams"/>
                </div>
                <div className="control">
                  <button className="button is-primary">+</button>
                </div>
              </div>

            </form>
          </div>
        </section>
      </React.Fragment>
    )
  }

}

export default CreateRecipe