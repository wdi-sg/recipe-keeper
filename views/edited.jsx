var React = require('react');

class Edited extends React.Component {
  render() {
    return (
      <html>
       <body>
           <h1>Recipe Edited</h1>
           <li>{this.props.name}</li>
           <li>{this.props.ingredients}</li>
           <li>{this.props.instructions}</li>

           <button><a href="/home">Back to Home</a></button>
           
       </body>
      </html>
    );
  }
}

module.exports = Edited;