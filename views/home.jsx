const React = require('react')

class Home extends React.Component {
    render() {
        let recipeList = this.props.recipes
        let recipeHTML = recipeList.map((item, index)=>{
            let recipeURL = "/recipes/" + index
            return <li><a href={recipeURL}>{item.title}</a></li>
        })
        let newRecipeLink = "/recipes/new"

        return (
            <html>
                <body>
                  <div>
                    <h1>All Recipes</h1>
                    <ul>
                    {recipeHTML}
                    </ul>
                    <p><a href={newRecipeLink}>Add a new recipe.</a></p>

                  </div>
                </body>
            </html>

            )
    }
}


module.exports = Home;