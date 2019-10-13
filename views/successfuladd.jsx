var React = require('react');
const Nav = require('./navbar.jsx')
class Home extends React.Component {
  render() {
    return (
      <html>
      <head>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous"></link>
        </head>
       <body>
         <Nav/>
         <div className="container text-center mt-4">
         <h1 className="display-2">Recipe Successfully Added</h1>
         <div className=" text-center well d-flex justify-content-around justify-content-center mt-5 " style={{width: "300px", margin:"0 auto"}}>

         <button className="btn btn-info btn-lg"><a className="text-white" href="/new">Add Another?</a></button>
          <button className="btn btn-primary btn-lg"><a className="text-white" href="/home">Home</a></button>
           </div>
          
         </div>
           
       </body>
      </html>
    );
  }
}

module.exports = Home;