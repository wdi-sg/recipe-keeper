var React = require('react');

class Home extends React.Component {
  render() {
  
    return (
      <html>
       <body>
           <h1>{this.props.name}</h1>
          
           <p>{this.props.ingredients}</p>
           <p>{this.props.instructions}</p>
          
          
       </body>
      </html>
    );
  }
}

module.exports = Home;