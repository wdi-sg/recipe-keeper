var React = require('react');

class Onerecipe extends React.Component {
    render() {
    return (
      <html>
        <head>
            <link rel="stylesheet" type="text/css" href="/style.css" />
        </head>
        <body>
          <div className="main-wrapper">
          <div className="header"><h1>Hello! Welcome to Home Cook Book!</h1></div>
            <div key={this.props.recipeData.title} className="one-recipe">
                <p className="one-recipe-id">Recipe No. {this.props.recipeData.id}</p>
                <p className="one-recipe-title">{this.props.recipeData.name}</p>
           </div>
          </div>
        </body>
      </html>
    );
  }
}

module.exports = Onerecipe;