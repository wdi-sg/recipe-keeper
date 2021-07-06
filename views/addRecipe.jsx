const React = require('react');

class Addrecipe extends React.Component {
  render() {
    return (<html>
      <body>
        <div>
          <h1>Welcome to my recipe book</h1>
          <p>Choose the following:
          </p>
          <form method="POST" action="/recipe/new">
            Title:
            <input type="text" name="Title"/><br/>
            Cuisine:&ensp;<select name="Category">
              <option value="Western">Western</option>
              <option value="Chinese">Chinese</option>
              <option value="Japanese">Japanese</option>
              <option value="Indian">Indian</option>
            </select><br/>
            ingredient 1:
            <input type="text" name="ingredient1"/><br/>
            ingredient 2:
            <input type="text" name="ingredient2"/><br/>
            ingredient 3:
            <input type="text" name="ingredient3"/><br/>
            <p>instructions:</p>
            <textarea name="instructions" rows="8" cols="38">
            </textarea>
            <br/>

            <input type="submit"/>
          </form>
        </div>
      </body>
    </html>);
  }
}

module.exports = Addrecipe;
