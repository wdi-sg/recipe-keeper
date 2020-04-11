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
        <body>
          <h1>Welcome to Recipe Keeper!</h1>
          <div>
            <ul>
              {recipeList}
            </ul>
            <a href="/recipes/new">Create a new recipe</a>
          </div>
        </body>
      </html>
    );
  }
}

module.exports = Index;