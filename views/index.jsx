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
                            <a href="/recipes/reset" className="nav__link reset-link">Reset to original Recipes</a>
                        </div>
                        <div className="homepage-body">
                        </div>
                    </div>
                </body>
            </html>
        );
    }
}

module.exports = Index;