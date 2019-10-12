const React = require('react');

class Index extends React.Component {
  render() {
    console.log(this.props.recipes);
    const list = this.props.recipes.map(recipe => {
      return (
        <div>
          <p>Title: {recipe.title}</p>
          <p>Ingredients: {recipe.ingredients}</p>
          <p>Instructions: {recipe.instructions}</p>
          <br/><br/>
        </div>
      );
    });
    return(
      <html>
        <body>
          <h1>Index</h1>
          {list}
        </body>
      </html>
    );
  }
}

module.exports = Index;