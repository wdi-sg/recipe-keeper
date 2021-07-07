var React = require('react');

class Show extends React.Component {
  render() {
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossOrigin="anonymous"/>
            let Capitalize = (str) => {
            return str.charAt(0).toUpperCase() + str.slice(1) };
    return (
      <html>
        <body>
          <div>
            <h1>Hey there, would you like to cook <span style={{ color: "#DD954D", fontWeight: "lighter"}}>{Capitalize(this.props.recipeList.title)}</span></h1>
            <h2><span style={{ color: "#DD954D", fontWeight: "lighter"}}>Ingredients</span> and <span style={{ color: "#DD954D", fontWeight: "lighter"}}>instructions</span> are as below: </h2>
            <p><span style={{ color: "#DD954D", fontWeight: "lighter"}}>Ingredients</span>: {Capitalize(this.props.recipeList.ingredients)}</p>
            <p> <span style={{ color: "#DD954D", fontWeight: "lighter"}}>Instructions</span>: {Capitalize(this.props.recipeList.instructions)}</p>
          </div>
        </body>
      </html>
    );
  }
}

module.exports = Show;