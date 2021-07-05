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
            <h1>Detail Recipe of {this.props.recipeData.name} </h1>
          </div>
          <div class="wrapper-form">

            <form method="get" action={"/recipes/"}>
              <table>
                <tr>
                  <td class="cell" >ID#</td>
                  <td><input class="cell" name="id" value={this.props.index} readonly="readonly" style={greyBox} /></td>
                </tr>
                <tr>
                  <td class="cell" >Name</td>
                  <td><input class="cell" name="name" value={this.props.recipeData.name} readonly="readonly" style={greyBox} /></td>
                </tr>
                <tr>
                  <td class="cell" >Ingredients</td>
                  <td><input class="cell" name="ingredients" value={this.props.recipeData.ingredients} readonly="readonly" style={greyBox} /></td>
                </tr>
                <tr>
                  <td class="cell" >Instructions</td>
                  <td><input class="cell" name="instructions" value={this.props.recipeData.instructions} readonly="readonly" style={greyBox} /></td>
                </tr>
                <tr>
                  <td></td>
                  <td><input type="submit" value="Back" class="button" /></td>
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