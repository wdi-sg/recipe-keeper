var React = require('react');
class Home extends React.Component {
  render() {
    console.log(this.props)
    let showRecipe = this.props[0];
    return (
      <html>
        <body>
          <div>
            <h1>This page is displaying Id number : {showRecipe} </h1>
          </div>
        </body>
      </html>
    );
  }
}

module.exports = Home;