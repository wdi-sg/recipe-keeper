var React = require('react');

class Delete extends React.Component {
  render() {
   let recipeArr= this.props.recipeArr;
    return (
      <html>
      <head>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous"></link>
        </head>
       <body>
           <h1>You are deleting {this.props.recipepage.name}</h1>
           <h2>Are you sure?</h2>
         <form method="POST" action={"/deleted/" + (recipeArr.indexOf(this.props.recipepage) + 1) + '?_method=delete'}>
        <input type="submit" value="Confirm"/>
        <button><a href="/home">Back To Home</a></button>
         </form>
       </body>
      </html>
    );
  }
}

module.exports = Delete;