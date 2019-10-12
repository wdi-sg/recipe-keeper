const React = require("react");
const Navbar = require("./components/Navbar");

class Index extends React.Component {
  render() {
    return (
      <>
        <link rel="stylesheet" href="./css/index.css" />
        <Navbar />
        <h1 className="title">Recipe Keeper</h1>
      </>
    );
  }
}

module.exports = Index;
