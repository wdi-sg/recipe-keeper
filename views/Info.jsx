var React = require('react');

class Info extends React.Component {
  render() {
    let editUrl = '/recipes/'+this.props.recipes.id+'/edit';
    let deleteUrl = '/recipesdelete/'+this.props.recipes.id;
    let title = this.props.recipes.title;
    let ing = this.props.recipes.ingredients;
    let inst = this.props.recipes.instructions;
    console.log(editUrl);
    console.log(deleteUrl);
    console.log(title);
    console.log(ing);
    console.log(inst);
    return (
    <html>
        <head>
            <title>{title}</title>
        </head>
        <body>
          <div>
            <h1>{title}</h1>
            <h2>Ingredients:</h2>
                <p>{ing}</p>
            <h2>Instructions:</h2>
                <p>{inst}</p>
                <button><a href = {editUrl}>Edit</a></button>
                <button><a href = {deleteUrl}>Delete</a></button>
          </div>
        </body>
    </html>
    );
  }
}

module.exports = Info;