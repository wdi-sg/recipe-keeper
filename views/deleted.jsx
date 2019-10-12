var React = require('react');

class Deleted extends React.Component {
  render() {
   
    return (
      <html>
       <body>
           <h1>Recipe Deleted</h1>
           
        <button><a href="/home">Back To Home</a></button>
        
       </body>
      </html>
    );
  }
}

module.exports = Deleted;