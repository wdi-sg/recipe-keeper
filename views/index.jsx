
var React = require('react');

var navBar = require('./components/navBar.jsx')


class indexPage extends React.Component {
  render() {

    const recipe = this.props.recipes.map(element => {
        return(
            <div className="card" style={{ width: 300, margin: 10 }}>
                <img className="card-img-top" src={element.img} alt="Card image cap" />
                <div className="card-body">
                  <h5 className="card-title">{element.title}</h5>
                  <p className="card-text">{element.description}</p>
                  <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                  <a href={"/recipes/"+element.id} class="btn btn-primary align-bottom">View Recipe</a>
                </div>
            </div>
        );
    });

    return (
      <html>
        <head>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossOrigin="anonymous"></link>
            <link href="https://fonts.googleapis.com/css?family=Lora&display=swap" rel="stylesheet"></link>
        </head>
        <body style={{backgroundImage : 'url("https://images.unsplash.com/photo-1495195129352-aeb325a55b65?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9")', backgroundPosition : "center", backgroundRepeat : "no-repeat", backgroundSize : "cover", height : "100vh", backgroundAttachment : "fixed"}}>

        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <a className="navbar-brand" href="#">~Delicious Recipes~</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-item nav-link active" href="#">Home <span className="sr-only">(current)</span></a>
              <a className="nav-item nav-link" href="#">Food</a>
              <a className="nav-item nav-link" href="#">Drinks</a>
            </div>
          </div>
        </nav>


          <div className="container mx-auto">
                <h1 className="text-center mt-5" style={{fontFamily : "Lora, serif"
}}>This Season's Hottest Recipes</h1>
            <div className = "row mt-3" style={{ justifyContent : "center" }}>
                {recipe}
            </div>

          </div>

            <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossOrigin="anonymous"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossOrigin="anonymous"></script>
            <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossOrigin="anonymous"></script>
        </body>
      </html>
    );
  }
}

module.exports = indexPage;