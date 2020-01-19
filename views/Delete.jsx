var React = require('react');
class Delete extends React.Component {

 render() {
    let id = this.props.id
    let actionURL = "/recipes/"+id+"?_method=delete"
  return (
   <html>
    <body>

          <head>
          <title>🥗Delete Your Recipe🥗</title>
          <meta charset="utf-8" />
      </head>



     <div>

             <form action={actionURL} method="POST">
             <input type="text" placeholder="title" name="title" value={this.props.recipe.title}/><br/>
             <textarea type="text" placeholder="ingredients" name="ingredients" value={this.props.recipe.ingredients}/><br/>
             <textarea type="text" placeholder="instructions" rows="5" cols="30" name="instructions" value={this.props.recipe.instructions}/><br/>
        <input type="submit" value="Click here to delete a recipe👩🏾‍🍳"/>
    </form>

     </div>
    </body>
   </html>
  );
 }
}
module.exports = Delete;




/*var React = require('react');
class Delete extends React.Component {
 render() {
    let id = this.props.id
    let actionURL = "/recipes/"+id+"?_method=put"
  return (
   <html>
    <body>
    <head></head>

     <div>
         <div>
             <form action={actionURL} method="POST">
             <input type="text" placeholder="title" name="title" value={this.props.recipe.title}/><br/>
             <textarea type="text" placeholder="ingredients" name="ingredients" value={this.props.recipe.ingredients}/><br/>
             <textarea type="text" placeholder="instructions" rows="5" cols="30" name="instructions" value={this.props.recipe.instructions}/><br/>
        <input type="submit" value="Click here to delete a recipe👩🏾‍🍳"/>
    </form>
          </div>
     </div>
    </body>
   </html>
  );
 }
}
module.exports = Delete;*/