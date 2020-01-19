var React = require('react');

class Updated extends React.Component {
  render() {
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossOrigin="anonymous"/>
            let Capitalize = (str) => {
            return str.charAt(0).toUpperCase() + str.slice(1) };
    return (
      <html>
        <body>
          <div>
            <h1>Hey there, the recipe in now entitled as <span style={{ color: "#4DDDD0", fontWeight: "lighter"}}>{Capitalize(this.props.recipe.title)}</span></h1>
            <h2><span style={{ color: "#4DDDD0", fontWeight: "lighter"}}>Ingredients</span> and <span style={{ color: "#4DDDD0", fontWeight: "lighter"}}>instructions</span> are as below: </h2>
            <p><span style={{ color: "#4DDDD0", fontWeight: "lighter"}}>Ingredients</span>: {Capitalize(this.props.recipe.ingredients)}</p>
            <p><span style={{ color: "#4DDDD0", fontWeight: "lighter"}}>Instructions</span>: {Capitalize(this.props.recipe.instructions)}</p>
          </div>
        </body>
      </html>
    );
  }
}

module.exports = Updated;