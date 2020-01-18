const React = require('react');

class NavBar extends React.Component {
    render() {
        // console.log('Navbar called!')
        return (<nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-2">
            <a className="navbar-brand" href="/">Freshly Baked Cookbook</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item" key="allRecipes">
                        <a href="/recipes/" className="nav-link">All Recipes</a>
                    </li>
                    <li className="nav-item" key="newRecipe">
                        <a href="/recipes/add" className="nav-link">Add New Recipe</a>
                    </li>
                    <li className="nav-item" key="newRecipe">
                        <a href="/recipes/random/" className="nav-link">Random Recipe</a>
                    </li>
                </ul>
            </div>
        </nav>)
    }
}

module.exports = NavBar;
