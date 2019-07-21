var React = require('react');
var HeaderBar = require('./components/headerbar.jsx');

class RecipePage extends React.Component {
  render() {
      //console.log(this.props['recipes']);
      //console.log(this.props.id);
      let recipe = this.props.recipes[this.props.id];
      let recipeTitle = recipe.title + " Recipe";
      let recipeImg = <div className='cardLg' style={{ backgroundImage: 'url('+recipe.img+')'}}></div>;
      let recipeIngredients = <div className='ingredients'><p>{recipe.ingredients}</p></div>;
      let recipeInstructions = <div className='ingredients'><p>{recipe.instructions}</p></div>;
      let keywords = recipe.keywords.map((words)=> {
          return <span className='keywords'>{words}</span>;
      });
    return (
      <html>
        <head>
            <link rel="stylesheet" href="/css/style.css"></link>
        </head>
        <body>
            <div className="container_col">
                <HeaderBar data={this.props} pageTitle={recipeTitle}/>
                {recipeImg}
                <p></p>
                <h2>Ingredients</h2>
                    {recipeIngredients}
                <p></p>
                <h2>Cooking Instructions</h2>
                    {recipeInstructions}
                <h2>Key Words</h2>
                <div className="container_row">
                    {keywords}
                </div>
            </div>
        </body>
      </html>
    );
  }
}

module.exports = RecipePage;
