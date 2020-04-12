var React = require('react');

class Single extends React.Component {
  render() {
            console.log(this.props);
    return (
      <html>
        <body>
            <div>
                <h1>This is the recipe for {this.props.title}</h1>
                <a>The ingredients are: {this.props.ingredients}</a>
                <br></br>
                <a>The instructions are as follows: {this.props.instructions}</a>
                <br></br>
            </div>
        </body>
      </html>
    );
  }
}

module.exports = Single;