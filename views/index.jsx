var React = require('react');
class Index extends React.Component {
  render() {
    let currentLink;
    let recipeList = this.props.recipes.map((element, index) => {
      for(let i = 1; i < this.props.recipes.length; i++){
        currentLink = "/recipes/" + String(index + 1);
        return <li><a href={currentLink}>{element.title}</a></li>
      }
    });
    return (
      <html>
        <head>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous"></link>
        </head>
        <body>
          <div className="container">
            <div className="row justify-content-center">
              <h1>Welcome to Recipe Keeper!</h1>
            </div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <a className="navbar-brand" href="#">Navbar</a>
              <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="navbar-collapse collapse" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item active">
                    <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Features</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Pricing</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link disabled" href="#">Disabled</a>
                  </li>
                </ul>
              </div>
            </nav>
            <div className="row justify-content-center">
              <ul>
                {recipeList}
              </ul>
            </div>
            <div className="row justify-content-center">
              <a href="/recipes/new">Create a new recipe</a>
            </div>
          </div>
        </body>
      </html>
    );
  }
}

module.exports = Index;