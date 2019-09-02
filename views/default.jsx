var React = require('react');

class DefaultLayout extends React.Component {
  render() {
    return (
      <html>
        <head>
            <title>Recipe Keeper</title>
            <link rel="stylesheet" href="style.css" type="text/css" />
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous"/>
            <link href="https://fonts.googleapis.com/css?family=Lexend+Deca&display=swap" rel="stylesheet"></link>
        </head>
        
            <header>
                <nav className="navbar navbar-expand-lg navbar-light bg-success">
                    <a className="navbar-brand" href="/recipes/">Home</a>
                      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                      </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item active">
                    <a className="nav-link" href="/recipes/new">Add Recipe <span className="sr-only">(current)</span></a>
                  </li>

                  <li className="nav-item">
                    <a className="nav-link" href="/ingredients/">View Ingredients</a>
                  </li>

                  <li className="nav-item">
                    <input type="text" className="input" placeholder="Search" />   
                  </li>
                  </ul>
              </div>
        </nav>
        </header>
        <body>
        <div className="container">
            {this.props.children}
          </div>
          <footer>
            Created by Jason Wong @ github
          </footer>
            
        </body>
        
        <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
            <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>
      </html>
    );
  }
}

module.exports = DefaultLayout;
