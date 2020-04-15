import React, { Component } from 'react'
import { Head } from '@react-ssr/express'
import Nav from '../partials/_nav'
import '../../public/styles/base.scss'
import { RecipeForm } from './recipe-form'

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
            <RecipeForm/>
          </div>
        </section>
      </React.Fragment>
    )
  }

}

export default CreateRecipe