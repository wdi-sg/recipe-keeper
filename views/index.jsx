const React = require('react');
const head = require('./head');
const header = require('./header');

class Index extends React.Component {

    render() {

        return (
            <html>
                {head()}
                <body>
                    <div className="container">
                        {header()}
                        <div className="nav">
                            <a href="/" className="nav__link index-link">Home</a>
                            <a href="/recipes/new" className="nav__link add-recipe">Add a Recipe</a>
                            <a href="/recipes/" className="nav__link show-all-recipes">Show All Recipes</a>
                            <a href="/recipes/reset" className="nav__link reset-link">Reset Recipes</a>
                            <a href="/ingredients" className="nav__link ingredients-link">Ingredients List</a>
                        </div>
                        <div className="landing-page">
                            <form method="POST" action="/recipes/sort" className="sort-form">
                                <label htmlFor="recipes-properties" className="sort-form__label">Sort Recipes By::</label>
                                <select id="recipes-properties" name="property" className="sort-form__selector">
                                <option value="title">title</option>
                                <option value="ingredientNumber">number of ingredients</option>
                                <option value="dateCreated">date added</option>
                              </select>
                              <input type="submit" formMethod="POST" value="sort" className="sort-form__btn"></input>
                            </form>
                        </div>
                    </div>
                </body>
            </html>
        );
    }
}

module.exports = Index;