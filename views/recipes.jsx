const React = require('react');
const head = require('./head');
const header = require('./header');

class Recipes extends React.Component {

    render() {

        const recipesList = this.props.recipes.map(recip => {
            const recipeUrl = `./${recip.id}`
            return (
                <div className="recipes-list__entry">
                    <img src={`${recip.img}`} alt="Recipe Image!" className="recipes-list__entry-img" />
                    <a href={recipeUrl} key={recip.id} className={`recipes-list__entry-link`}>{recip.title}</a>
                </div>
            )
        })

        return (
            <html>
                {head()}
                <body>
                    <div className="container">
                        {header()}
                        <div className="nav">
                            <a href="/" className="nav__link index-link">Home</a>
                            <a href="/recipes/new" className="nav__link add-recipe">Add a Recipe</a>
                            <a href="/recipes/reset" className="nav__link reset-link">Reset to original Recipes</a>
                        </div>
                        <ul className="recipes-list">
                            {recipesList}
                        </ul>


                    </div>
                </body>
            </html>
        );
    }
}

module.exports = Recipes;