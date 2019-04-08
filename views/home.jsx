var React = require('react');
class Home extends React.Component {
  render() {
    return (
      <html>
        <body>
          <div>
            <h1>I am { this.props.name }. I am { this.props.status } with {this.props.children} children.</h1>

          </div>
        </body>
      </html>
    );
  }
}

module.exports = Home;