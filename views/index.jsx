var React = require('react');

class Index extends React.Component {

    render() {

const recipes = this.props.recipes.map ( recipe => {

   return <tr>
            <td>{recipe.recipeTitle}</td>
            <td>{recipe.ingredients}</td>
            <td>{recipe.instructions}</td>
          </tr>
})

    return (
        <html>
            <head>
            <meta charset="UTF-8"/>
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"></link>
                <link rel="stylesheet" href="/homestyle.css"></link>
            </head>
            <body>
            <div align="center">
                <h1>All Recipes:</h1>
                <table>
                    <tr>
                        <th>Recipe Title</th>
                        <th>Ingredients</th>
                        <th>Instructions</th>
                    </tr>
                        {recipes}
                </table>
            </div>
            </body>
        </html>
    );
    }
}

module.exports = Index;