var React = require('react');

class Queryid extends React.Component {
    render() {
  return (

   <html>
   <head> </head>

    <body>
         <div>
            <h1>Recipe title: { this.props.recipe.title}</h1>
            <h2>Ingredients: {this.props.recipe.ingredients}</h2>
            <h2>Description: {this.props.recipe.description}</h2>
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