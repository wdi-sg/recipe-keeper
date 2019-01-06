var React = require('react');

class Nav extends React.Component {
    render() {
        return(

            <nav className="navbar navbar-expand-md bg-dark">
              <div className="collapse navbar-collapse d-flex justify-content-center" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <a className="nav-link" href='/recipes/'>RECIPES</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href='/ingredients'>INGREDIENTS</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href='/recipes/new'>CONTRIBUTE</a>
                  </li>
                </ul>
              </div>
            </nav>
        )

    }
}


module.exports = Nav;