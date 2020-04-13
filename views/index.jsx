var React = require('react');

class Index extends React.Component {
  render() {
    const recipeIndex = this.props.titles.map(recipe => {
        let recipeLink = "/recipes/" + this.props.titles.indexOf(recipe)
        return <li><a href={recipeLink}>{recipe}</a></li>
    })
    return (
      <html>
        <head><link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossOrigin="anonymous"></link></head>
        <body>
          <div>
            <h1>Index of Recipes</h1>
            <ul>
                {recipeIndex}
            </ul>
          </div>
        </body>
      </html>
    );
  }
}

module.exports = Index;