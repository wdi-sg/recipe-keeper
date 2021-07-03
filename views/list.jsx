var React = require('react');

class List extends React.Component {
  render() {

    let recipeList = this.props.recipeList.map(recipe => {

        return(
            <ul>
                <li>Recipe Number: {recipe.id}</li>
                <li>Recipe Title: {recipe.title}</li>
                <li>{recipe.ingredients}</li>
                <li>Instructions: {recipe.instructions}</li>
            </ul>
        )
    })


    return (
      <div>
        {recipeList}
      </div>
    );
  }
}
module.exports = List;