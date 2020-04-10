var React = require('react');

class SingleRecipe extends React.Component {
  render() {
    const title = this.props.title;
    const ingredients = this.props.ingredients;
    const instructions = this.props.instructions;

    return (
      <html>
        <head><link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossOrigin="anonymous"></link></head>
        <body>
          <div>
            <h1>{title}</h1>
            <h2>Ingredients: {ingredients}</h2>
            <h3>instructions: {instructions}</h3>
          </div>
        </body>
      </html>
    );
  }
}

module.exports = SingleRecipe;