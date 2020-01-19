var React = require('react');
class Edit extends React.Component {
 render() {
    let id = this.props.id
    let actionURL = "/recipes/"+id+"?_method=put"
  return (
   <html>
      <head>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous"/>
          <title>🥗Edit Your Recipe🥗</title>
          <meta charset="utf-8" />
      </head>


    <body>
     <div>
   <div class="card-body">
             <form action={actionURL} method="POST">
             <input type="text" placeholder="title" name="title" value={this.props.recipe.title}/><br/>
             <textarea type="text" placeholder="ingredients" name="ingredients" value={this.props.recipe.ingredients}/><br/>
             <textarea type="text" placeholder="instructions" rows="5" cols="30" name="instructions" value={this.props.recipe.instructions}/><br/>
        <input type="submit" value="Click here to update your recipe...👩🏾‍🍳" className="btn btn-info"/>
    </form>
          </div>
     </div>
    </body>
   </html>
  );
 }
}
module.exports = Edit;




/*var React = require('react');
class Edit extends React.Component {
 render() {
    let id = this.props.name.id - 1
    let actionURL = "/recipes/"+id+"?_method=put"
  return (
   <html>
    <body>
     <div>
         <div>

            <h1>The recipe is: { this.props.name.id}</h1>
            <form method="POST" action={actionURL}>
                Title:<input type="text" name="title" placeholder={this.props.name.title}/><br/>
                Ingredients:<input type="text" name="ingredients" placeholder={this.props.name.ingredients}/><br/>
                Instructions:<input type="text" name="instructions" placeholder={this.props.name.instructions}/><br/>
                <input type="submit" value="Submit"/>
            </form>
          </div>
     </div>
    </body>
   </html>
  );
 }
}
module.exports = Edit;*/