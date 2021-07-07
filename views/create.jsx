var React = require('react');

class Create extends React.Component {
  render() {
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossOrigin="anonymous"/>
    return (
      <html>
        <body>
          <div>
            <h1>Add a <span style={{ color: "#4D8EDD", fontWeight: "lighter"}}>NEW</span> recipe</h1>
            <form method="POST" action="/recipes">
                Title: <input type="text" name="title" placeholder="Burger"/><br/>
                Ingredients: <input type="text" name="ingredients" placeholder="Bacons and patty"/><br/>
                Instructions: <input type="text" name="instructions" placeholder="Cook patty and bacon, stack them in between 2 sesame buns."/><br/>
                <input type="submit" value="Submit"/>
            </form>
          </div>
        </body>
      </html>
    );
  }
}

module.exports = Create;