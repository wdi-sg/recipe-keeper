
var React = require('react');
var DefaultLayout = require('./layouts/default');
var NavLayout = require('./layouts/navlayout');
class recipesPage extends React.Component {
  render() {
         const recipes = this.props.recipes;
         const recipeElements = recipes.map((recipe, index)=>{
            let recipeLink = "/recipes/"+(index+1);
  return          (
<div class="card m-5" style={{width: "20rem"}}>
  <div class="card-body d-flex flex-column justify-content-between">
    <h4 class="card-title"><a href={recipeLink}>{recipe.title}</a></h4>
    <footer><span class="card-text">Created on {recipe.createdDate}</span></footer>
  </div>
  </div>);
        });

    return (
    <DefaultLayout title="Home">
    <NavLayout sort={true}>
      <li class="nav-item active">
              <a class="nav-link mt-4" >Home</a>
      </li>
      <li class="nav-item">
      <a class="nav-link mt-4" href="/recipes/new" >Add</a>
      </li>
      </NavLayout>
      <div class="container ">
 <div class="row">
          {recipeElements}
          </div>

</div>
      </DefaultLayout>
    );
  }
}

module.exports = recipesPage;