var React = require('react');

class Create extends React.Component {
  render() {
    return (
    <html>
        <head>
            <title>Create New Recipe</title>
        </head>
        <body>
          <div>
            <h1>Share Your Recipe: </h1>
                <form method = 'POST' action = '/recipes'>
                <label for='title'>Recipe Name: </label>
                    <input id = 'title' type = 'text/input' name = 'title' placeholder='What are you cooking?'/>
                <label for='ing'>Ingredients: </label>
                    <input id = 'ingredients' type = 'text/input' name = 'ingredients' placeholder='Ingredients'/>
                <label for='inst'>Instructions: </label>
                    <input id ='instructions' type = 'text/input' name = 'instructions' placeholder='Instructions'/>
                <input type = 'submit'/>
                </form>
          </div>
        </body>
    </html>
    );
  }
}

module.exports = Create;