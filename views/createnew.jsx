var React = require('react');
const Layout = require('./layout.jsx');

class Createnew extends React.Component {
  render() {
    var recipeId = parseInt(this.props.recipesList[this.props.recipesList.length - 1].id);
    return (
        <Layout>
            <div>
                <h1>Create a recipe!</h1>
                <form method="POST" action="/recipes">
                    <p>Recipe Id:</p>
                    <input name="id" type="number" min="0" value={recipeId + 1} readOnly />
                    <p>Recipe Title</p>
                    <input name="title"/>
                    <p>Image</p>
                    <input name="img"/>
                    <p>Ingredients</p>
                    <input name="ingredients"/>
                    <p>Instructions</p>
                    <input name="instructions"/>
                    <p>--</p>
                    <input type="submit"/>
                </form>
            </div>
        </Layout>
    );
  }
}

module.exports = Createnew;