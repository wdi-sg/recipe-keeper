var React = require('react');
const Layout = require('./c-layout.jsx');

class RecipePage extends React.Component {
  render() {
    return (
        <Layout>
            <div class="col">
                <h1>{this.props.recipeData.title}</h1>
                <img src={this.props.recipeData.img} class="img-fluid"/>
                <h2>Ingredients</h2>
                <ul>
                {this.props.recipeData.ingredients.map(ingredients =>
                    <li>{ingredients}</li>)}
                </ul>
            </div>
        </Layout>
    );
  }
}

module.exports = RecipePage;