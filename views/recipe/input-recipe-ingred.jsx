import React, { Component } from 'react'

export class InputRecipeIngred extends Component {
  render () {
    return <div className="field is-grouped">
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
  }
}