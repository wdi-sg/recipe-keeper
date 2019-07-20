var React = require('react');

class List extends React.Component {
  render() {

    let recipeList = this.props.recipeList.map(recipe => {
        return(
            <li>{recipe.title}</li>
        )
    })

    return (
      <ul>
        {recipeList}
      </ul>
    );
  }
}
module.exports = List;