var React = require("react");

class Edit extends React.Component {

  render() {
    let allrecipes = this.props.recipelist
    let editRecipe = this.props.recipepage
    return (
      <html>
        <head>
          <link
            rel="stylesheet"
            href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"
            integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO"
            crossorigin="anonymous"
          ></link>
        </head>
        <body>
           <h1>Editing Recipe : {this.props.name}</h1>
           <form method="POST"action={"/edited/" + (allrecipes.indexOf(editRecipe) + 1) +'?_method=put'}>
              <p><input type="text" name="name" value={editRecipe.name}/></p> 
              <p><input type="text" name="ingredients"value={editRecipe.ingredients} /></p> 
              <p><input type="text" name="instructions" value={editRecipe.instructions}/></p> 
               <input type="submit" value="submit"/>
           </form>
       </body>
      </html>
    );
  }
}

module.exports = Edit;
