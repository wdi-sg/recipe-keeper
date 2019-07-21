var React = require('react');

class Home extends React.Component {
    render() {
        const recipeList = this.props.recipeKey.map(recipe =>
        <div className="card-deck">
            <div key={recipe.name} className="card shadow p-3 mb-5 bg-white rounded">
                <img className="card-img-top" src={recipe.image_url} />
                <div className="card-body">
                    <h5 className="card-title">{recipe.name}</h5>
                </div>
            </div>
        </div>
        );
    return (
      <html>
        <head>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" />
            <link rel="stylesheet" type="text/css" href="/style-ver-2.css" />
        </head>
        <body>
            <div className="main-wrapper">
                <div className="header"><h1>Hello! Welcome to Home Cook Book!</h1></div>
                    {recipeList}
            </div>
        </body>
      </html>
    );
  }
}

module.exports = Home;