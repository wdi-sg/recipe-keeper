var React = require('react');

class Onerecipe extends React.Component {
    render() {
        const ingredList = this.props.recipeIngrKey.map(ingred =>
            <li>{ingred}</li>
        );
    return (
      <html>
        <head>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" />
            <link rel="stylesheet" type="text/css" href="/style-ver-2.css" />
        </head>
        <body>
          <div className="container">
            <div className="row">
                <div className="col">
                    <h1 className="display-3">Shrimpy World</h1>
                    <div className="sub-header">{this.props.recipeNameKey}</div>
                </div>
            </div>

            <div key={this.props.recipeNameKey} className="row">
                <div className="col-7 card shadow p-3 mb-5 bg-white rounded">
                    <img className="card-img" src={this.props.recipeImgKey} />
                </div>
                <div className="col-5">
                    <p className="one-recipe-title">Ingredients: </p>
                    {ingredList};
                </div>
           </div>
          </div>
        </body>
      </html>
    );
  }
}

module.exports = Onerecipe;