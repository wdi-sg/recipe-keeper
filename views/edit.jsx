var React = require('react');

class Form extends React.Component {
  render() {

    const greyBox = {
      backgroundColor: '#D3D3D3',
    };

    return (
      <html>
        <link rel="stylesheet" type="text/css" href="/recipe.css" />
        <body>
          <div class="wrapper-submenu">
            <h1>Edit Recipe {this.props.recipeData.name} </h1>
          </div>
          <div class="wrapper-form">

            <form method="POST" action={"/recipes/edit/" + this.props.index + '?_method=PUT'}>
              <table>
                <tr>
                  <td class="cell">ID#</td>
                  <td><input class="cell" name="id" value={this.props.index} readonly="readonly" style={greyBox} /></td>
                </tr>
                <tr>
                  <td class="cell">Name</td>
                  <td><input class="cell" name="name" value={this.props.recipeData.name} /></td>
                </tr>
                <tr>
                  <td class="cell">Ingredients</td>
                  <td><input class="cell" name="ingredients" value={this.props.recipeData.ingredients} /></td>
                </tr>
                <tr>
                  <td class="cell">Instructions</td>
                  <td><input class="cell" name="instructions" value={this.props.recipeData.instructions} /></td>
                </tr>
                <tr>
                  <td></td>
                  <td><input type="submit" class="button" value="Update"  /></td>
                </tr>
              </table>
            </form>
          </div>
        </body>
      </html>
    );
  }
}

module.exports = Form;