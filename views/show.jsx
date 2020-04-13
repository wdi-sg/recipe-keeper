var React = require('react');

class Show extends React.Component {
  render() {
    const link = "/recipes/"+this.props.id+"?_method=put";
    const editLink = "/recipes/"+ this.props.id +"/edit";
    const deleteLink = "/recipes/"+ this.props.id + "?_method=delete";
    return (
      <html>
      <head>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous"/>
       </head>
        <body style={{backgroundColor: 'purple',color: 'white', 'text-align': 'center'}}>
          <div>
          <p>Name:</p>
            <p>{this.props.name}</p>
            <p>Ingredients:</p>
            <p>{this.props.ingredients}</p>
            <p>Instructions:</p>
            <p>{this.props.instructions}</p>
          </div>
          <a href={editLink} style={{'font-size': '30px'}}>Edit Page</a>
          <br/>
          <form method="POST" action={deleteLink}><br/>
            <input type="submit" value="Delete Recipe"style={{padding: '10px'}}/>
        </form>
        </body>
      </html>
    );
  }
}

module.exports = Show;