const React = require("react");

class Index extends React.Component {
  render() {
    return (
      <>
        <h1>Index</h1>
        <button>
          <a href="/recipes">View Recipec List</a>
        </button>
        <button>
          <a href="/ingredients">View Ingredient List</a>
        </button>
      </>
    );
  }
}

module.exports = Index;
