const React = require("react");

class Navbar extends React.Component {
  render() {
    return (
      <div className="nav">
        <button className="nav-buttons">
          <a className="nav-links" href="/">Home</a>
        </button>
        <button className="nav-buttons">
          <a className="nav-links" href="/recipes">Recipes</a>
        </button>
        <button className="nav-buttons">
          <a className="nav-links" href="/ingredients">Ingredients</a>
        </button>
      </div>
    );
  }
}

module.exports = Navbar;
