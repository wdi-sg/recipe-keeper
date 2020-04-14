var React = require('react');

class Show extends React.Component {
  render() {
    const editLink = '/recipes/'+ this.props.id +"/edit";
    const deleteLink = "/recipes/"+ this.props.id + "?_method=delete";
    const homeLink = '/recipes';
    return (
      <html>
      <head>
      <title>Recipe Heaven</title>
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous"></link>
      </head>
        <body>
        <div className="container">
          <div className="col-lg-10">
              <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <a className="navbar-brand" href={homeLink}>Recipe Heaven</a>
              <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
              <a className="nav-link float-right" href="https://www.google.com/url?sa=i&url=https%3A%2F%2Fhollywoodslook.wordpress.com%2F2013%2F09%2F09%2Fzayn-malik-six-pack-abs-photo-shoot%2F&psig=AOvVaw236rNcJeSIH67KUW4wRqa4&ust=1586860855456000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCODVjsCb5egCFQAAAAAdAAAAABAD">Zayn's Abs</a>
              <form className="form-inline">
                <input className="form-control mr-sm-2" type="search" placeholder="Jasmine is a hoe" aria-label="Search"/>
                <button Name="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
              </form>
              </nav>
          <div className="container">
            <h3>Recipe Number</h3>
            <p>{this.props.id}</p>
            <h4>Recipe Name</h4>
            <p>{this.props.recipeName}</p>
            <h4>Ingredients</h4>
            <p>{this.props.ingredients}</p>
            <h4>Instructions</h4>
            <p>{this.props.instructions}</p>
          </div>
            <div>
              <a href={editLink}>Edit Page</a>
            </div>
            <form method="POST" action={deleteLink}>
            <input type="submit" value="delete recipe"/>
          </form>
          <a href={homeLink}>Go back Home</a>
          </div>
          </div>
        </body>
      </html>
    );
  }
}

module.exports = Show;