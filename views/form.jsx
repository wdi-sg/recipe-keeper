var React = require('react');

class Form extends React.Component {
  render() {
    return (
      <html>
      <head>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous"></link>
        </head>
       <body>
           <h1>Add a Recipe</h1>
           <form method="POST"action="/added">
              <p><input type="text" name="name" placeholder="Name"/></p> 
              <p><input type="text" name="ingredients" placeholder="Ingredients"/></p> 
              <p><input type="text" name="instructions" placeholder="Instructions"/></p> 
               <input type="submit"/>
           </form>
       </body>
      </html>
    );
  }
}

module.exports = Form;