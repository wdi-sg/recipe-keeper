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
                    <input name="title"/>
                    <p>Image: {this.props.recipe.img}</p>
                    <input name="img"/>
                    <p>Ingredients: {this.props.recipe.ingredients}</p>
                    <input name="ingredients"/>
                    <p>Instructions: {this.props.recipe.instructions}</p>
                    <input name="instructions"/>
                    <p>--</p>


            </div>
        </Layout>
    );
  }
}

module.exports = Onerecipe;