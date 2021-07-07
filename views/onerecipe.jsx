var React = require('react');
const Layout = require('./layout.jsx');

class Onerecipe extends React.Component {
  render() {
    return (
        <Layout>
            <div>
                <h1>{this.props.recipe.title}</h1>

                    <p>Recipe Id: {this.props.recipe.id}</p>
                    {/*<input name="id" type="number" min="0" value={this.props.recipe.id} readOnly />*/}
                    <p>Recipe Title: {this.props.recipe.title}</p>
                    <p>Image: {this.props.recipe.img}</p>
                    <p>Ingredients: {this.props.recipe.ingredients}</p>
                    <p>Instructions: {this.props.recipe.instructions}</p>
                    <p>--</p>
                    <a href={`/recipes/${this.props.recipe.id}/edit`}>Edit this recipe</a><br />
                    <a href={`/recipes/${this.props.recipe.id}/delete`}>Delete this recipe</a>

            </div>
        </Layout>
    );
  }
}

module.exports = Onerecipe;