const React = require("react");

class Footer extends React.Component {
  render() {
    const author = "{ Ben Jacob Lee }";
    return (
      <h6
        className="mt-4"
        style={{ textAlign: "center" }}
      >
        Made with 🖤 by {author}
      </h6>
    );
  }
}

module.exports = Footer;
