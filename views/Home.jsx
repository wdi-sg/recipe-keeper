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
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous"/>
          <title>🥗Plant Based Recipes🥗</title>
          <meta charset="utf-8" />
      </head>

    <body>
     <div class="card-body">
      <h1 style={{color: 'green', width: "30%", textAlign: "center", margin: "80px auto 5px auto"}}>List of Recipes </h1>
      <p>{list}</p>
     </div>
    </body>
   </html>
  );
 }
}
module.exports = Home;