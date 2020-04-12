var React = require('react');

class List extends React.Component {
  render() {
            console.log(this.props);
    return (
      <html>
        <body>
            <div>
                <h1>This is the recipe for ${}</h1>
            </div>
        </body>
      </html>
    );
  }
}

module.exports = List;