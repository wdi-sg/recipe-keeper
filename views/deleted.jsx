var React = require('react');
const Nav = require('./navbar')
class Deleted extends React.Component {
  render() {
   
    return (
      <html>
      <head>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous"></link>
        </head>
       <body>
         <Nav/>
         <div className="container text-center mt-4">
         <h1 className="display-2">Recipe Deleted</h1>
           
           <button className="mt-3 btn btn-primary btn-lg"><a className="text-white" href="/home">Back To Home</a></button>
         </div>
           
        
       </body>
      </html>
    );
  }
}

module.exports = Deleted;