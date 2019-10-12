var React = require('react');
const Nav = require('./navbar')
class Form extends React.Component {
  render() {
    let ingArr = this.props.ingredient;
    let ingredientChoice = ingArr.map(item => {
      return(
        <option value={item.name}>{item.name}</option>
      )
    })
    return (
      <html>
      <head>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossOrigin="anonymous"></link>
        </head>
       <body>
         <Nav/>
         <div className="container text-center pt-5">
         <h1 className="display-2">Add a Recipe</h1>
           <form method="POST"action="/added" className="pt-3">
              <p><input type="text" name="name" placeholder="Name"/></p> 
              {/* <p><input type="text" name="ingredients" placeholder="Ingredients"/></p>  */}
      <select class="mdb-select md-form" name="ingredients" id="ingredients" multiple>
        {ingredientChoice}
      </select>
              <p><input type="text" name="instructions" placeholder="Instructions"/></p> 
               <input type="submit"/>
           </form>
         </div>
         
       </body>
      </html>
    );
  }
}

module.exports = Form;