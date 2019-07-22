var React = require('react');
const Layout = require('./layout.jsx');

class Deleterecipes extends React.Component {
  render() {
    return (
        <Layout>
            <div>
                <h1>Confirm Deletion of {this.props.recipe.title}</h1>
                <form method="POST" action={"/recipes/"+ this.props.recipe.id + "?_method=DELETE"}>
                    <p>Recipe Id: {this.props.recipe.id}</p>
                    <p>Recipe Title: {this.props.recipe.title}</p>
                    <p>Image: {this.props.recipe.img}</p>
                    <p>Ingredients: {this.props.recipe.ingredients}</p>
                    <p>Instructions: {this.props.recipe.instructions}</p>
                    <p>--</p>
                    <input type="submit" value="Delete this"/>
                </form>

            </div>
        </Layout>
    );
  }
}

module.exports = Deleterecipes;