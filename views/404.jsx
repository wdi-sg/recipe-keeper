const React = require("react");
const Layout = require("./layout");

class Error extends React.Component {
  render() {
    const search = this.props.search
    return (
      <Layout>
        <h1 style={{textAlign: "center"}}>404: Not found!</h1>
      </Layout>
    );
  }
}

module.exports = Error;
