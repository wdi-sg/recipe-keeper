var React = require('react');

class AllRecipes extends React.Component {
  render() {
    return (
      <html>
       <body>
           <h1>Add a Recipe</h1>
           <form method="POST"action="/allrecipes">
              <p><input type="text" name="title" placeholder="Recipe Name"/></p> 
              <p><input type="text" name="ingredients" placeholder="Ingredients"/></p> 
              <p><input type="text" name="instructions" placeholder="Instructions"/></p> 
               <input type="submit"/>
           </form>
       </body>
      </html>
    );
  }
}

module.exports = AllRecipes;