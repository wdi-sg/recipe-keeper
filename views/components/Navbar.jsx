const React = require("react");

class Navbar extends React.Component {
  render() {
    return (
      <>
        <button>
          <a href="/">Home</a>
        </button>
        <button>
          <a href="/recipes">Recipe List</a>
        </button>
        <button>
          <a href="/ingredients">Ingredient List</a>
        </button>
      </>
    );
  }
}

module.exports = Navbar;
