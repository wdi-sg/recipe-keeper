var React = require('react');
class Home extends React.Component {
  render() {
    console.log("////");
    console.log("Render is working !!");
    console.log("////");
    console.log(this.props);
    return (
      <html>
        <body>
          <div>
            <h1>This page is displaying Id number : </h1>
          </div>
        </body>
      </html>
    );
  }
}

module.exports = Home;