const React = require("react")

class Index extends React.Component {
  render() {
    const recipes = this.props.recipes.map((recipe)=> {
      return (<p>
                <a href={"/recipes/" + recipe.id}>Go to recipe {recipe.id}</a>
              </p>)
    })
    return (
      <html>
        These are all my recipes:

        {recipes}
      </html>
      )
  }
}

module.exports = Index;
