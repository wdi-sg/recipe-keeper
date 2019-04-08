var React = require('react');
class Home extends React.Component {
  render() {
    return (
      <html>
        <body>
          <div>
            <h1> hi ! {this.props.recipe}</h1>
          </div>
        </body>
      </html>
    );
  }
}

module.exports = recipe;