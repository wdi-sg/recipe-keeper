import React, { Component } from 'react'
import { InputRecipeIngred } from './input-recipe-ingred'

export class RecipeForm extends Component {
  render () {
    return <form action="/recipes/new" method="post">

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

      <InputRecipeIngred/>

    </form>
  }
}