var React = require('react');

class Edit extends React.Component {
  render() {
    const link = "/recipes/"+this.props.id+"?_method=put";
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
              <a className="nav-link" href={homeLink}>Home <span className="sr-only">(current)</span></a>
              <a className="nav-link float-right" href="https://www.google.com/url?sa=i&url=https%3A%2F%2Fhollywoodslook.wordpress.com%2F2013%2F09%2F09%2Fzayn-malik-six-pack-abs-photo-shoot%2F&psig=AOvVaw236rNcJeSIH67KUW4wRqa4&ust=1586860855456000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCODVjsCb5egCFQAAAAAdAAAAABAD">Zayn's Abs</a>
              <form className="form-inline">
                <input className="form-control mr-sm-2" type="search" placeholder="Elsa is a hoe" aria-label="Search"/>
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
              </form>
              </nav>
          <div>
          <h1>Edit Page</h1>
          <form method="POST" action={link}>
            <p>Recipe Number</p>
            <input name="recipe name" value={this.props.id}/>
            <p>Recipe Name</p>
            <input name="recipe name" value={this.props.name}/>
            <p>Ingredients</p>
            <input name="ingredients" value={this.props.ingredients}/>
            <p>Instructions</p>
            <input name="instructions" value={this.props.instructions}/>
            <input type="submit" value="submit"/>
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