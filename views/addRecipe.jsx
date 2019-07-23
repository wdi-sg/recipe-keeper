var React = require('react');
var Layout = require('./c-layout');

class AddRecipe extends React.Component {
  render() {
    return (
        <Layout>
            <h1> Add new recipe form! </h1>
            <form method="POST" action={"/recipes"}>

                <p>Title</p>
                <input name="title"/>
                <p>Ingredients</p>
                <input name="ingredients"/>
                <p>Instructions</p>
                <input name="instructions"/>
                <p>Recipe Image URL</p>
                <input name="img"/><br/><br/>
                <input type="submit" value="Add Recipe"/>
            </form>
        </Layout>

    );
  }
}

module.exports = AddRecipe;