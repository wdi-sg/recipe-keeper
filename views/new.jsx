const React = require('react');

class New extends React.Component{
    render(){

        return(
            <html>
                <body>
                  <div>
                    <h1>Add new recipe!</h1>
                    <form action="/recipes/new" method="post" id="new">
                      <div>
                        <label htmlFor="title">Title: </label>
                        <input type="text" name="title" required/>
                      </div>
                      <div>
                        <label htmlFor="ingredients">Ingredients </label>
                        <input type="text" name="ingredients" required/>
                      </div>
                      <div>
                        <label htmlFor="instructions">Instructions </label>
                        <input type="text" name="instructions" required/>
                      </div>
                    </form>
                    <button type="submit" form="new" value="submit">
                        Submit
                    </button>
                  </div>
                </body>
              </html>
            )
    }
}
module.exports = New;