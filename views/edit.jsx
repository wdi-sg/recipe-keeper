var React = require("react");
const Nav = require('./navbar');
const Script = require("./script");
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
            crossOrigin="anonymous"
          ></link>
        </head>
        <Nav/>
        <body>
          <div className="container text-center mt-5">
          <h1 className="display-2">Editing Recipe : {editRecipe.name}</h1>
          <div className="row">
          <div className="col-12">
          <form className="mt-3" method="POST"action={"/edited/" + (allrecipes.indexOf(editRecipe) + 1) +'?_method=put'}>
              <div className="form-group">
                <label htmlFor="name" class="col-sm-2 col-form-label col-form-label-lg">Recipe Name: </label>
                <p><input className="form-control form-control-lg" type="text" name="name" value={editRecipe.name}/></p> 
              </div>
              <div className="form-group">
                <label htmlFor="name" class="col-sm-2 col-form-label col-form-label-lg" >Ingredients </label>
                <p><input className="form-control form-control-lg" type="text" name="ingredients"value={editRecipe.ingredients} /></p> 
              </div>
              <div className="form-group">
                <label htmlFor="name" class="col-sm-2 col-form-label col-form-label-lg">Instructions </label>
                <p><textarea  class="form-control form-control-lg " style={{height:"200px"}} type="text" name="instructions" value={editRecipe.instructions}/></p> 
              </div>
              
              
             
               <button  class="btn btn-primary" type="submit" value="submit">Submit</button>
           </form>
          </div>
          </div>
  
           
          </div>
          
       </body>
       <Script/>
      </html>
    );
  }
}

module.exports = Edit;
