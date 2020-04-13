var React = require('react');

class Edit extends React.Component {
  render() {
    const editLink = "/recipes/"+ this.props.id +"/edit";
    const link = "/recipes/"+this.props.id+"?_method=put";
    return (
      <html>
      <head>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous"/>
       </head>
        <body style={{backgroundColor: 'gray', 'text-align': 'center', color: 'purple'}}>
          <div>
          <h1>Edit Page</h1>
          <form method="POST" action={link}>
            <p>Name</p>
            <input type = "text" name="name" value={this.props.name}/><br/><br/>
            <p>Ingredients</p>
            <input type = "text" name = "ingredients" value={this.props.ingredients}/><br/><br/>
            <p>Instructions</p>
            <input type = "text" name = "instructions" value={this.props.instructions}/>
            <br/><br/>
            <button type="submit">Submit</button>
            </form>
          </div>
        </body>
      </html>
    );
  }
}

module.exports = Edit;