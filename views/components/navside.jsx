var React = require('react');

class NavSide extends React.Component {
  render() {
    console.log("<NavSide> Added")
    return (
        <div className="col-md-3">
        <ul className="nav nav-pills flex-column">
        <li className="nav-item">
        <a className="nav-link active" href="#">Active</a>
        </li>
        <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Dropdown</a>
        <div className="dropdown-menu">
        <a className="dropdown-item" href="#">Action</a>
        <a className="dropdown-item" href="#">Another action</a>
        <a className="dropdown-item" href="#">Something else here</a>
        <div className="dropdown-divider"></div>
        <a className="dropdown-item" href="#">Separated link</a>
        </div>
        </li>
        <li className="nav-item">
        <a className="nav-link" href="#">Link</a>
        </li>
        <li className="nav-item">
        <a className="nav-link disabled" href="#">Disabled</a>
        </li>
        </ul>
        </div>
    );
  }
}

module.exports = NavSide;