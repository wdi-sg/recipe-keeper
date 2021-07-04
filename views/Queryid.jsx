var React = require('react');

class Queryid extends React.Component {
    render() {
  return (

   <html>
   <head>
         <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous"/>
          <title>🥗Plant Based Recipes🥗</title>
          <meta charset="utf-8" />
   </head>

    <body>
        <div class="card-body">
            <h3 style= {{color: 'green', width: "30%", textAlign: "center", margin: "80px auto 5px auto"}}>Recipe for: {this.props.recipe.title}</h3>
            <p style= {{color: 'grey', width: "30%", textAlign: "center", margin: "30px auto 5px auto"}}>Ingredients: {this.props.recipe.ingredients}</p>
            <p style= {{color: 'grey', width: "30%", textAlign: "center", margin: "30px auto 5px auto"}}>Instructions: {this.props.recipe.instructions}</p>
     </div>



    </body>
   </html>
  )
 };
};

module.exports = Queryid;





// SAMPLE
/*var React = require('react');

class Queryid extends React.Component {

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
  return (
   <html>
    <body>
         <div>
            <h1>The Recipe is: { this.props.recipeList.name}</h1>
            {list}
     </div>

    </body>
   </html>
  )
 };
};

module.exports = Queryid;*/