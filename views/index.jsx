var React = require('react');
class Index extends React.Component {
  render() {
    let currentLink;
    let recipeList = this.props.recipes.map((element, index) => {
      for(let i = 1; i < this.props.recipes.length; i++){
        currentLink = "/recipes/" + String(index + 1);
        return <li><a href={currentLink}>{element.title}</a></li>
      }
    });
    return (
      <html>
        <head>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous"></link>
        </head>
        <body>
          <div class="container">
            <div class="row justify-content-center">
              <h1>Welcome to Recipe Keeper!</h1>
            </div>
            <div class="row justify-content-center">
              <ul>
                {recipeList}
              </ul>
            </div>
            <div class="row justify-content-center">
              <a href="/recipes/new">Create a new recipe</a>
            </div>
          </div>
        </body>
      </html>
    );
  }
}

module.exports = Index;