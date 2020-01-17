var React = require('react');

class All extends React.Component {

  render() {
    let recipeUrl = '/recipes/'+recipes.id;
    const recipes = this.props.name.map( recipes => {
      return <li><a href={recipeUrl}>{recipes}></a></li>
    });

    return (
      <div>
      <h1>List of all recipes</h1>
        <ul>
        {recipes}
        </ul>
      </div>
    );
  }
}

module.exports = All;