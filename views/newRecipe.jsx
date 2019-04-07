var React = require('react');
var Layout = require('./layout');

class NewRecipe extends React.Component {

    test() {
        console.log("Button was clicked");

    }

    render () {

        return (<Layout>

            <div class="new-header">
                <h1>New Recipe!</h1>
            </div>

            <div class="form-container">
                <form method="POST" action="/recipes">

                    <div class="form-row">
                        <div class="col">
                            <label for="recipeId">ID</label>
                            <input type="number" class="form-control form-control-lg" name="id" readonly="readonly" value={this.props.lastId} />
                        </div>

                        <div class="col">
                            <label for="recipeTitle">Recipe Title</label>
                            <input type="text" class="form-control form-control-lg" name="title" />
                        </div>
                    </div>

                    <br />

                    <div class="form-row">
                        <div class="col">
                            <label for="img">Image</label>
                            <input type="text" class="form-control form-control-lg" name="img" />
                        </div>

                        <div class="col">
                            <label for="ingredients">Ingredients</label>
                            <input type="text" class="form-control form-control-lg" name="ingredients" />

{/*                            <button type="button" class="btn btn-outline-info" id="addIngredient" onClick={this.test}>Add Ingredient</button>*/}
                        </div>
                    </div>

                    <br />

                    <div class="form-row">
                        <div class="col">
                            <label for="instructions">Instructions</label>
                            <textarea class="form-control" name="instructions"></textarea>
                        </div>
                    </div>

                    <br />

                    <button type="submit" class="btn btn-primary btn-lg float-right">Submit</button>

                </form>
            </div>

        </Layout>)  // end of return

    }  // end of rendering
}  // end of new recipe class

module.exports = NewRecipe;