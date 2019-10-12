var React = require('react');

class Delete extends React.Component {
  render() {
   
    return (
      <html>
       <body>
           <h1>You are Deleting {this.props.name}</h1>
           <h2>Are you sure?</h2>
         <form method="POST" action={"/deleted/" + this.props.name + '?_method=delete'}>
        <input type="submit" value="Confirm"/>
        <button><a href="/home">Back To Home</a></button>
         </form>
       </body>
      </html>
    );
  }
}

module.exports = Delete;