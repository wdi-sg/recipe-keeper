var React = require('react');

class MyRecipes extends React.Component {
    render() {
        console.log(this.props);

        //this.props the KEY of recipeArray, which is allRecipes
        const recipeArray = this.props.recipes;
        let list = recipeArray.map(recipes => {

            //curly braces are needed for ALL returns
            return (
             <ul>
                 <li>{recipes.dish}</li>
                 <li>{recipes.ingredients}</li>
                 <li>{recipes.instructions}</li>
             </ul>
            )
        });

        return (
            <html>
        <body>
        <div>
            <h1>My Recipes!</h1>
            {list}
          </div>
        </body>
      </html>
        );
    }
}

module.exports = MyRecipes;