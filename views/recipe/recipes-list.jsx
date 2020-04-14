import React, { Component } from 'react'

class RecipesList extends Component {

  constructor (props) {
    super(props)
    this.state = { recipes: [] }
  }

  componentDidMount () {
    this.setState({ recipes: this.props.recipes })
    console.log(this.props.recipes)
  }

  render () {
    return (
      <div>hello</div>
    )
  }

}

export default RecipesList