var React = require('react');

class AddedNew extends React.Component {
  render() {
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossOrigin="anonymous"/>
            let Capitalize = (str) => {
            return str.charAt(0).toUpperCase() + str.slice(1) };
    return (
      <html>
        <body>
          <div>
            <h1>Hey there, you've added <span style={{ color: "#4DDDD0", fontWeight: "lighter"}}>{Capitalize(this.props.latestRecipe.title)}</span></h1>
            <h2>Double check if you have added the <span style={{ color: "#4DDDD0", fontWeight: "lighter"}}>ingredients</span> correctly.</h2>
            <p><span style={{ color: "#4DDDD0", fontWeight: "lighter"}}>Ingredients</span>: {Capitalize(this.props.latestRecipe.ingredients)}</p>
            <h3>Here is a reminder on how to prepare <span style={{ color: "#4DDDD0", fontWeight: "lighter"}}>{Capitalize(this.props.latestRecipe.title)}</span> just in case you need it =)</h3>
            <p> <span style={{ color: "#4DDDD0", fontWeight: "lighter"}}>Instructions</span>: {Capitalize(this.props.latestRecipe.instructions)}</p>
          </div>
        </body>
      </html>
    );
  }
}

module.exports = AddedNew;