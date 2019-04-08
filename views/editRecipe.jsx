var React = require('react');
var Layout = require('./layout');

class EditRecipe extends React.Component {

    render () {

        const action = `/recipes/${this.props.id}?_method=put`;

        return (<Layout>

            <div class="new-header">
                <h1>Edit Recipe!</h1>
            </div>

            <div class="form-container">
                <form method="POST" action={action}>

                    <div class="form-row">
                        <div class="col">
                            <label for="recipeId">ID</label>
                            <input type="number" class="form-control form-control-lg" name="id" readonly="readonly" value={this.props.id} />
                        </div>

                        <div class="col">
                            <label for="recipeTitle">Recipe Title</label>
                            <input type="text" class="form-control form-control-lg" name="title" value={this.props.title}/>
                        </div>
                    </div>

                    <br />

                    <div class="form-row">
                        <div class="col">
                            <label for="ingredients">Ingredients</label>
                            <input type="text" class="form-control form-control-lg" name="ingredients" value={this.props.ingredients}/>
                        </div>

                        <div class="col">
                            <label for="img">Images</label>
                            <input type="text" class="form-control form-control-lg" name="img" value={this.props.img}/>
                        </div>
                    </div>

                    <br />

                    <div class="form-row">
                        <div class="col">
                            <label for="instructions">Instructions</label>
                            <textarea class="form-control" name="instructions" value={this.props.instructions}></textarea>
                        </div>
                    </div>

                    <br />

                    <button type="submit" class="btn btn-primary btn-lg float-right">Edit</button>

                </form>
            </div>

        </Layout>)  // end of return
    }  // end of rendering
}  // end of class

module.exports = EditRecipe;