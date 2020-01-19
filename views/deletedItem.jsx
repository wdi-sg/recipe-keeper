var React = require('react');

class DeletedItem extends React.Component {
  render() {
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossOrigin="anonymous"/>
        let Capitalize = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1) };
    return (
      <html>
        <body>
          <div>
            <h1>Hey there, you have deleted <span style={{ color: "#C11F44", fontWeight: "lighter" }}>{Capitalize(this.props.recipe.title)}</span></h1>
            <p> Just in case you want to see it one last time, the ingredients was <span style={{ color: "#C11F44", fontWeight: "lighter" }}>{Capitalize(this.props.recipe.ingredients)}</span></p>
            <p> Not forgetting, please screenshot the instructions before you forget. Instructions: <span style={{ color: "#C11F44", fontWeight: "lighter" }}>{Capitalize(this.props.recipe.instructions)}</span></p>
          </div>
        </body>
      </html>
    );
  }
}

module.exports = DeletedItem;