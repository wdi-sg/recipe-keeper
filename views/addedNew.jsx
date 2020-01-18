var React = require('react');

class AddedNew extends React.Component {
  render() {
        let {title, ingredients, instructions, index} = this.props;
    return (
      <html>
        <body>
          <div>
            <h1>Hey there, you've added {title}</h1>
            <h2>Double check if you have added the ingredients correctly underneath</h2>
            <p>Ingredients: {ingredients}</p>
            <h3>Here is a reminder on how to prepare {title} just in case you need it =)</h3>
            <p> Instructions: {instructions}</p>
          </div>
        </body>
      </html>
    );
  }
}

module.exports = AddedNew;