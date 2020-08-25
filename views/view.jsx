const React = require("react")

class Home extends React.Component {
  render() {
        let {recipes} = this.props;
            const fuck = recipes.map(recipe=>{
                return<div>
                        <h1>{recipe.Title}</h1>
                        <p>{recipe.Ingredients}<br/>{recipe.Instructions}</p>
                        </div>
            })
    return (
            <div>
                {fuck}
            </div>
    );
  }
}

module.exports = Home;

//this takes the name/number/hobbies keys from this.props and assigns their values to name/number/hobbies variables
// let {name, number, hobbies} = this.props