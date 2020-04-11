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
          <div>
            <ul>
              {recipeList}
            </ul>
          </div>
        </body>
      </html>
    );
  }
}

module.exports = Index;