var React = require('react');

class Delete extends React.Component {
  render() {
    let deleteUrl = '/recipes/'+this.props.recipes.id+'?_method=delete'
    let title = this.props.recipes.title;
    let ing = this.props.recipes.ingredients;
    let inst = this.props.recipes.instructions;
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
          <h1>Delete Form:</h1>
            <h1>{title}</h1>
            <h2>Ingredients:</h2>
                <p>{ing}</p>
            <h2>Instructions:</h2>
                <p>{inst}</p>
        <form action = {deleteUrl} method = 'POST'>
        <label for='delete'> Click Confirm to Delete: </label>
            <input id = 'delete' type ='submit' value = 'Confirm'/>
        </form>
          </div>
        </body>
    </html>
    );
  }
}

module.exports = Delete;