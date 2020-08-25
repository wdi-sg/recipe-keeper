const React = require('React');

class Recipes extends React.Component {
    render() {

        let {recipes} = this.props;
        const recipe = recipes.map( recipe => {            
            return  <div>
                        <h1>{recipe.title}</h1>
                        <p>{recipe.ingredients}</p>
                        <p>{recipe.instructions}</p>
                    </div>
        })

      return (
        <html>
          <body>
            <div>
              {recipe}
            </div>
          </body>
        </html>
      );
    }
  }

module.exports = Recipes;