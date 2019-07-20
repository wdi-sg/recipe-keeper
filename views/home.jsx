var React = require('react');

class Home extends React.Component {
    render() {
        const recipeList = this.props.recipeKey.map(recipe =>
           <div key={recipe.name} className="recipe">
                    <p className="id">{recipe.id}</p>
                    <p className="name">{recipe.name}</p>
           </div>
        );
    return (
      <html>
        <head>
            <link rel="stylesheet" type="text/css" href="/style.css"></link>
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