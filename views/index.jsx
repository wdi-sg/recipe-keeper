var React = require('react');

class Index extends React.Component {
  render() {
    const listOfRecipes = this.props.titles.map( listOfRecipes => {
      return <li key={listOfRecipes}>{listOfRecipes}</li>
    });

    return (
      <div>
        <h1>Recipes</h1>
        <ul>
        {listOfRecipes}
        </ul>
      </div>
    );
  }
}


module.exports = Index;