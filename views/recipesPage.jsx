
var React = require('react');
var DefaultLayout = require('./layouts/default');
var NavLayout = require('./layouts/navlayout');
class recipesPage extends React.Component {
  render() {
         const recipes = this.props.recipes;
         const recipeElements = recipes.map((recipe)=>{
            let recipeLink = "/recipes/"+ recipe.id;
  return          (
<div className="card m-5" style={{width: "20rem"}}>
  <div className="card-body d-flex flex-column justify-content-between">
    <h4 className="card-title"><a href={recipeLink}>{recipe.title}</a></h4>
    <footer><span className="card-text">Created on {recipe.createdDate}</span></footer>
  </div>
  </div>);
        });

    return (
    <DefaultLayout title="Home">
    <NavLayout sort="true">
      <li className="nav-item active">
              <a className="nav-link mt-4" >Home</a>
      </li>
      <li className="nav-item">
      <a className="nav-link mt-4" href="/recipes/new" >Add</a>
      </li>
      </NavLayout>
      <div className="container h-100">
    <div className="row h-100 justify-content-center align-items-center">
        <div className="col-10 col-md-8 col-lg-6 text-center">
        <h1>Recipes</h1>
        </div>
        </div>
 <div className="row">
          {recipeElements}
          </div>

</div>
      </DefaultLayout>
    );
  }
}

module.exports = recipesPage;