var React = require('react');
var DefaultLayout = require('./layouts/default');

class recipeHome extends React.Component {

    render() {
        const recipes = this.props.recipes.map(recipe => {
            return  <div className="eachRecipeContainer">
                        <a href={'/recipes/' + recipe.Id}>
                            <img src={recipe.Image} />
                            <h2>{recipe.Title}</h2>
                        </a>
                    </div>
        })


        return(

           <DefaultLayout>
                    <div className="all">
                        {recipes}
                    </div>
           </DefaultLayout>

            )
    }
}

module.exports = recipeHome;