var React = require('react');
const Layout = require('./c-layout.jsx');

class Edit extends React.Component {
  render() {
    return (
        <Layout>
            <div>
            <h1>Edit Recipe</h1>
            <img src={this.props.recipeData.img}/>
            <form method="POST" action={"/recipes/"+this.props.index+'?_method=PUT'}>
                <p>Recipe id</p>
                <input value={this.props.recipeData.id} name="id"/>
                <p>Recipe Title</p>
                <input value={this.props.recipeData.title} name="title"/>
                <p>Prep Time (mins)</p>
                <input value={this.props.recipeData.prepTime} name="prepTime"/>
                <p>Recipe Image URL</p>
                <input value={this.props.recipeData.img} name="img"/>
                <p>Recipe Description</p>
                <input value={this.props.recipeData.desc} name="desc"/>
                <p>Ingredients</p>
                {this.props.recipeData.ingredients.map(ingredients =>
                    <input value={ingredients} name="ingredients"/>)}
                <p>Instructions</p>
                <input value={this.props.recipeData.instructions} name="instructions"/><br></br><br></br>
                <input type="submit" value="Edit Recipe"/>
            </form>
            <p> include delete button which renders deleterecipe.jsx</p>
            </div>
        </Layout>

    );
  }
}

module.exports = Edit;