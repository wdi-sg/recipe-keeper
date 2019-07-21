
var React = require('react');

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
                  <a href={"/recipes/"+element.id} class="btn btn-primary">View Recipe</a>
                </div>
            </div>
        );
    });

    return (
      <html>
        <head>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossOrigin="anonymous"></link>
        </head>
        <body>
          <div className="container mx-auto">
                <h1 className="text-center mt-5">List of All Recipes</h1>
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