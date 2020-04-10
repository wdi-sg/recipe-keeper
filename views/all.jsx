var React = require('react');

class All extends React.Component {

  render() {
    // let recipeUrl = '/recipes/'+this.props.recipes[id];
    const listOfRecipes = this.props.title.map( recipes => {
      return <li>{recipes}</li>
    });

    return (
      <div>
      <h1>List of all recipes</h1>
        <ul>
        {listOfRecipes}
        </ul>
      </div>
    );
  }
}

module.exports = All;