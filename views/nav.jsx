var React = require('react');

class Nav extends React.Component {
    render() {
        return(
            <nav>
                <a href='/recipes/' className="home">RECIPES</a>
                <a href='/ingredients' className="ingredients">INGREDIENTS</a>
                <a href='/recipes/new' className="create">CONTRIBUTE</a>
            </nav>
        )
    }
}


module.exports = Nav;