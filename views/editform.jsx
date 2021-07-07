var React = require('react');
const Layout = require('./layout.jsx');

class Editform extends React.Component {
  render() {
    return (
        <Layout>
            <div>
                <h1>{this.props.recipe.title}</h1>
                <form method="POST" action={"/recipes/"+ this.props.recipe.id + "?_method=PUT"}>
                    <p>Recipe Id:</p>
                    <input name="id" type="number" value={this.props.recipe.id} readOnly />
                    <p>Recipe Title: {this.props.recipe.title}</p>
                    <input name="title" value={this.props.recipe.title}/>
                    <p>Image: {this.props.recipe.img}</p>
                    <input name="img" value={this.props.recipe.img}/>
                    <p>Ingredients: {this.props.recipe.ingredients}</p>
                    <input name="ingredients" value={this.props.recipe.ingredients}/>
                    <p>Instructions: {this.props.recipe.instructions}</p>
                    <input name="instructions" value={this.props.recipe.instructions}/>
                    <p>--</p>
                    <input type="submit" value="edit this"/>
                </form>
            </div>
        </Layout>
    );
  }
}

module.exports = Editform;