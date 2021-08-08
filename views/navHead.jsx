var React = require('react');

class NavHead extends React.Component {
    render() {
        return (
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand">Navigation</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <a className="nav-link" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/recipes/list">List</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/recipes/new">New Recipe</a>
                            </li>
                        </ul>
                        <form className="form-inline my-2 my-lg-0" action="/">
                          <input className="form-control mr-sm-2" type="search" placeholder="Search Recipes" aria-label="Search" name="search"/>
                          <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                        </form>
                      </div>
                </nav>
        );
    }
}

module.exports = NavHead;