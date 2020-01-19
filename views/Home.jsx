var React = require('react');

class Home extends React.Component {
 render() {
    let recipeArray = this.props.recipeList;
    let list = recipeArray.map(recipes => {
        return (
            <div>
                <li>{recipes.title}</li>
                <li>{recipes.ingredients}</li>
                <li>{recipes.instructions}</li>
            </div>
            )
    })

  return (
   <html>
      <head>
          <title>List of Recipes</title>
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