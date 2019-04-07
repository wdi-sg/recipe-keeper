var React = require('react');
var Layout = require('./layout');


class SingleRecipe extends React.Component {
  render() {

            let recipeInstructions = this.props.ccb.instructions.map(item => {
                              return <li>{item}</li>
                            });

            let recipeIngredients = this.props.ccb.ingredients.map(item => {
                              return <li>{item}</li>
                            });

            let recipeImage = this.props.ccb.img;

            let recipeTitle = this.props.ccb.title;

            let recipeId = this.props.ccb.id;
            let recipeNo = '/recipes/' + recipeId;

            console.log(recipeNo);

    return (
                <Layout>

                    <nav class="navbar navbar-dark bg-dark fixed-top">
                      <a class="navbar-brand text-light" href="http://localhost:3000/">Sexy Hotpots</a>
                      <form class="form-inline" method="POST" action="/recipes/0">
                        <input class="form-control mr-sm-2" type="search" placeholder="Search By Recipe No" aria-label="Search" name="recipeId" id="recipeId"/>
                        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                      </form>
                    </nav>
                    <br/><br/>

                    <div class="recipe-page">
                      <h1>Recipe {recipeId} : {recipeTitle}</h1>
                        <div class="row">

                          <div class="col-md-8 recipe-image">
                            <img src={recipeImage}/>
                          </div>

                          <div class="col-md-4 recipe-ingredients">
                            <h2> INGREDIENTS </h2>
                            <ul>
                                {recipeIngredients}
                            </ul>
                          </div>

                        </div>

                        <div class="row recipe">
                            <div class="col-md-12 col-sm-12 recipe-instructions">
                              <h2> Instructions</h2>
                                <ol>
                                    {recipeInstructions}
                                </ol>
                            </div>

                        </div>

                         <div class="row recipe-buttons">
                            <form method="post" action="/recipe/edit" class="col-md-6">
                                <input type="text" class="form-control" name = "recipeid"id="recipename" value={recipeId} readonly style={{display: 'none'}}/>
                                <button type="button" class="btn btn-primary btn-lg btn-block" type="submit">Edit</button>
                            </form>
                                <br/>

                            <form method="post" action="/recipe/delete" class="col-md-6">
                                <input type="text" class="form-control" name = "recipeid"id="recipename" value={recipeId} readonly style={{display: 'none'}}/>

                                <button type="button" class="btn btn-danger btn-lg btn-block" type="submit" >Delete</button>
                            </form>

                         </div>

                      </div>

                </Layout>
    );
  }
}

module.exports = SingleRecipe;