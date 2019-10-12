var React = require('react');

class Home extends React.Component {
  render() {
    return (
      <html>
      <head>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous"></link>
        </head>
       <body>
         <div className="container text-center">
         <h1 className="display-2">Recipe Successfully Added</h1>
          <button className="btn btn-info"><a className="text-white" href="/new">Add Another?</a></button>
          <button className="btn btn-primary"><a className="text-white" href="/home">Home</a></button>
         </div>
           
       </body>
      </html>
    );
  }
}

module.exports = Home;