var React = require('react');

class Edit extends React.Component {
  render() {
    let {title, ingredients, instructions, index} = this.props;
    let postURL = '/recipes/'+{index}+'?_method=put';
    return (
      <html>
        <body>
          <div>
            <h1>Edit Form</h1>
            <form method="POST" action={postURL}>
                Title: <input type="text" name="title" placeholder={title}/><br/>
                Ingredients: <input type="text" name="ingredients" placeholder={ingredients}/><br/>
                Instructions: <input type="text" name="instructions" placeholder={instructions}/><br/>
                <input type="submit" value="Edit"/>
            </form>
          </div>
        </body>
      </html>
    );
  }
}

module.exports = Edit;