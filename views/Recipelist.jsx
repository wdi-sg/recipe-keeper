var React = require('react');
const Layout = require('./layout.jsx');

class OneRecipe extends React.Component {
    render() {
        console.log (this.props.recipeData);
        return ( //can only have 1 main element in this (), but can have multiple child elements. eg <div> <h1></h1><p></p></div>. only 1 main element (the div)

            <li>
                Title: {this.props.recipeData.title} <br />
                Ingredients: {this.props.recipeData.ingredients} <br />
                Instructions: {this.props.recipeData.instructions}
                <br /> {<a href={"/recipes/"+this.props.recipeData.title+"/edit"}>edit this recipe</a>}
            </li>
        );
    }
}


class RecipeList extends React.Component {
  render() {

    const recipeLis = this.props.recipesList.map((recipe)=>{
        // return <li>{recipe info}</li>
        return <OneRecipe recipeData={recipe}> </OneRecipe>
    });

    return (
        <Layout>
          <div>
            <p>Recipe name: {this.props.recipesList[0].title}</p>

            <div>
                <ul>{recipeLis}</ul>
            </div>
          </div>
        </Layout>
    );
  }
}

module.exports = RecipeList;