var React = require('react');

class Info extends React.Component {
  render() {
    let title = this.props.recipes.title;
    let ing = this.props.recipes.ingredients;
    let inst = this.props.recipes.instructions;
    console.log(title);
    console.log(ing);
    console.log(inst);
    return (
    <html>
        <head>
            <title>{title}</title>
        </head>
        <body>
          <div>
            <h1>{title}</h1>
            <h2>Ingredients:</h2>
                <p>{ing}</p>
            <h2>Instructions:</h2>
                <p>{inst}</p>
          </div>
        </body>
    </html>
    );
  }
}

module.exports = Info;