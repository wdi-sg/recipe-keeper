var React = require('react');
class Home extends React.Component {
  render() {
    console.log("////");
    console.log("Render is working !!");
    console.log("////");
    console.log(this.props.id);
    console.log("This is the object in home" + this.props.recipe);

    let recipeArray = this.props.recipe
    console.log(recipeArray[this.props.id]);
    const checkID = id => {
        console.log("checking ID")
        return id === this.props.recipe.id
    }

    const correctRecipe = recipeArray.filter(checkID);

    return (
      <html>
        <body>
          <div>
            <h1>This page is displaying Id number : {correctRecipe}</h1>
            <p>The recipe is : </p>
          </div>
        </body>
      </html>
    );
  }
}

module.exports = Home;