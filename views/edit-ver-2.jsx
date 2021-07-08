var React = require('react');

class Edit extends React.Component {
  render() {
    var url = "/recipes/" + this.props.userEnteredIdKey;
    var formAction = url + "?_method=PUT";

    const ingredList = this.props.recipeData.ingredients.join("\n");

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
            <div className="row">
                <div className="col-4 card shadow p-3 mb-5 bg-white rounded">
                    <div className="sub-header">{this.props.recipeData.name}</div>
                    <img className="card-img-top" src={this.props.recipeData.image_url} />
                    <p className="view-recipe"><a href={url}>View this recipe</a></p>
                </div>
                <div className="col-8 card shadow p-3 mb-5 bg-white rounded">
                    <form action={formAction} method="POST">
                        <div class="form-group">
                            <p className="action-header">Recipe Id: </p>
                            <input className="recipe-input-id" type="number" name="id" defaultValue={this.props.recipeData.id} />

                            <p className="action-header">Edit Recipe Name: </p>
                            <input className="recipe-input" type="text" name="name" defaultValue={this.props.recipeData.name} />

                            <p className="action-header">Edit Recipe Ingredients: </p>
                            <textarea name="ingredients" className="form-control" rows="8">{ingredList}</textarea>

                            <p className="action-header">Edit Source Url: </p>
                            <input className="recipe-input" type="text" name="source_url" defaultValue={this.props.recipeData.source_url} />

                            <p className="action-header">Edit Recipe Id: </p>
                            <input className="recipe-input" type="text" name="recipe_id" defaultValue={this.props.recipeData.recipe_id} />

                            <p className="action-header">Edit Recipe Image Url: </p>
                            <input className="recipe-input" type="text" name="image_url" defaultValue={this.props.recipeData.image_url} />

                            <input className="submit-input-btn" type="submit" value="Submit"/>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        </body>
      </html>
    );
  }
}

module.exports = Edit;