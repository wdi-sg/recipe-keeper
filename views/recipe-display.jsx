var React = require("react");

class RecipeDisplay extends React.Component {
  render() {
    const link = "/recipes/" + this.props.id + "/edit";
    let ingredArrHtml = this.props.ingredients.map((element) => {
      return <li>{element}</li>;
    });
    return (
      <html>
        <head>
          <link
            rel="stylesheet"
            href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
            integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
            crossorigin="anonymous"
          />
        </head>
        <body>
          <div className="container">
            <div className="row">
              <div className="col mt-5">
                <h2><u>YOUR RECIPE</u></h2>
                <h4>Id:</h4>
                <p>{this.props.id}</p>
                <h4>Title:</h4>
                <p>{this.props.title}</p>
                <h4>Ingredients:</h4>
                <ol>
                  {ingredArrHtml}
                </ol>
                <h4>Instructions:</h4>
                <p>{this.props.instructions}</p>

                <form method="GET" action={link}>
                  <button type="button" className="btn btn-primary">Edit This Recipe</button>
                </form>

              </div>
            </div>
          </div>
        </body>
      </html>
    );
  }
}

module.exports = RecipeDisplay;
