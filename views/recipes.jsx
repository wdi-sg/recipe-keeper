const React = require('react');

import Head from './head';
import Header from './header';

class Recipes extends React.Component {

    render() {

        const recipesList = this.props.recipes.map(recip => {

            const recipeUrl = `./${recip.id}`
            return (
                <div className="recipes-list__entry">
                    <div className="recipes-list__entry-img-wrapper">
                         <img src={`${recip.img}`} alt="Recipe Image!" className="recipes-list__entry-img" />
                    </div>
                    <div className="recipes-list__entry-link-wrapper">
                        <a href={recipeUrl} key={recip.id} className={`recipes-list__entry-link`}>{recip.title}</a>
                    </div>
                </div>
            )
        })

        return (
            <html>
                <Head />
                <body>
                    <div className="container">
                        <Header />
                        <div className="nav">
                            <a href="/" className="nav__link index-link">Home</a>
                            <a href="/recipes/new" className="nav__link add-recipe">Add a Recipe</a>
                            <a href="/recipes/reset" className="nav__link reset-link">Reset Recipes</a>
                            <a href="/ingredients" className="nav__link ingredients-link">Ingredients List</a>
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