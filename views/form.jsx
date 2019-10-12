var React = require('react');

class Form extends React.Component {
  render() {
    return (
      <html>
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