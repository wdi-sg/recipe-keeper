var React = require('react');

class Edit extends React.Component {
  render() {
    var url = "/recipes/" + this.props.userEnteredIdKey;
    var formAction = url + "?_method=PUT";
    return (
      <html>
          <head>
              <link rel="stylesheet" type="text/css" href="/style.css"></link>
          </head>
        <body>
            <div className="main-wrapper">
                <p><a href={url}>View This Recipe</a></p>
                <div className="one-input-recipe">
                    <h1>Edit Recipe No. {this.props.userEnteredIdKey}</h1>

                    <form action={formAction} method="POST">
                        <p>Recipe Actual Index in "ingredient" Array: </p>
                        <input className="recipe-input-id" type="number" name="id" defaultValue={this.props.recipeData.id} />
                        <h3>Recipe Name: </h3>
                        <input className="recipe-input-name" name="name" defaultValue={this.props.recipeData.name} />
                        <input className="submit-input-btn" type="submit" value="Submit"/>
                    </form>
                </div>
            </div>
        </body>
      </html>
    );
  }
}

module.exports = Edit;