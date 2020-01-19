var React = require('react');

class Home extends React.Component {
 render() {
    let recipeArray = this.props.recipeList;
    let list = recipeArray.map(recipes => {
        return (
            <div>
                <h3>{recipes.title}</h3>
                <p><strong>Ingredients:</strong> {recipes.ingredients}</p>
                <p><strong>Instructions:</strong> {recipes.instructions}</p>
            </div>
            )
    })

  return (
   <html>
      <head>
          <title>🥗Plant Based Recipes🥗</title>
          <meta charset="utf-8" />
      </head>

    <body>
     <div>
      <h1>List of Recipes </h1>
      <p>{list}</p>
     </div>
    </body>
   </html>
  );
 }
}
module.exports = Home;