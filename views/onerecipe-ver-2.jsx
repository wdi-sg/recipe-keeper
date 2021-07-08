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
                </div>
            </div>

            <div key={this.props.recipeNameKey} className="row single-recipe">
                <div className="content-left col-5 card shadow p-3 mb-5 bg-white rounded">
                    <div className="sub-header">{this.props.recipeNameKey}</div>
                    <img className="card-img" src={this.props.recipeImgKey} />
                    <p className="view-recipe"><a href={"/recipes/" + this.props.recipeIdKey + "/edit"}>Edit this recipe</a></p>
                </div>
                <div className="content-right col-7 card shadow p-3 mb-5 bg-white rounded">
                    <p className="one-recipe-title">Ingredients: </p>
                        <ul>{ingredList}</ul>
                     <p className="one-recipe-title">Cooking Instructions: </p>
                     <ul>
                     <li>
                     <a href={this.props.recipeData.source_url} target="_blank">{this.props.recipeData.source_url}</a>
                     </li>
                     </ul>
                </div>
           </div>
          </div>
        </body>
      </html>
    );
  }
}

module.exports = Onerecipe;