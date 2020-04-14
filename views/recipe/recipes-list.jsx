import React, { Component } from 'react'
import '../../public/styles/base.scss'
import '../../public/styles/recipes.scss'
import { Head } from '@react-ssr/express'
import Nav from '../partials/_nav'

const Ingredient = props => (
  <div className='card-content'>
    <p className="content">
      {`${props.ingredient.quantity} ${props.ingredient.unit} ${props.ingredient.name}`}
    </p>
  </div>
)
const Recipe = props => (
  <div className="card">
    <header className="card-header">
      <h1 className="card-header-title">
        {props.recipe.name}
      </h1>
      <span className="is-hidden" name='recipe-id'>
          {props.recipe._id}
        </span>
    </header>
    <div className="card-content">
      <div className="content">
        {props.recipe.instructions}
      </div>
    </div>
    <div className="card-footer">
      {/*// ingredients*/}
      {props.children}
    </div>
  </div>
)

class RecipesList extends Component {

  constructor (props) {
    super(props)
    this.state = { recipes: [] }
  }

  componentDidMount () {
    this.setState({ recipes: this.props.recipes })
    console.log(this.props)
  }

  ingredientList () {
    return this.state.recipes.map(recipe => {
      let newIngredients = recipe.ingredients.map(ingredient => {
        return (
          <Ingredient ingredient={ingredient} key={ingredient.fk_ingredientId}></Ingredient>
        )
      })
      recipe.ingredients = newIngredients
      console.log(newIngredients)
      return newIngredients
    })
  }

  recipesList () {
    return this.state.recipes.map(currentRecipe => {
      return (
        <Recipe recipe={currentRecipe} key={currentRecipe._id}>
          {this.ingredientList()}
        </Recipe>
      )
    })
  }

  render () {
    return (
      <React.Fragment>
        <Head>
          <title>KNN's Recipe Keeper App - All Recipes</title>
        </Head>
        {/*todo: pass in stuff inside nav*/}
        <header>
          <Nav/>
        </header>
        <section className="section">
          <h3 className="title has-text-grey">Your Recipes</h3>
          <div className="container">
            {this.recipesList()}
          </div>
        </section>

      </React.Fragment>
    )
  }

}

export default RecipesList