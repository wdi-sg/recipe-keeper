const React = require("react");
const Navbar = require("./components/Navbar");

class Index extends React.Component {
  render() {
    return (
      <>
        <Navbar />
        <h1>Recipe Keeper</h1>
      </>
    );
  }
}

module.exports = Index;
