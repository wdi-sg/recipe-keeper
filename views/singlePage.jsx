
var React = require('react');

var navBar = require('./components/navBar.jsx')

class singlePage extends React.Component {
  render() {

    return (
      <html>
        <head>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossOrigin="anonymous"></link>
            <link href="https://fonts.googleapis.com/css?family=Lora&display=swap" rel="stylesheet"></link>

        </head>
        <body>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
              <a className="navbar-brand" href="#">~Delicious Recipes~</a>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                  <a className="nav-item nav-link active" href={"/recipes"}>Home <span className="sr-only">(current)</span></a>
                  <a className="nav-item nav-link" href="#">Food</a>
                  <a className="nav-item nav-link" href="#">Drinks</a>
                </div>
              </div>
            </nav>

          <div className="container mx-auto">
            <h1 className="text-center my-5" style={{fontFamily : "Lora, serif"
}}>{this.props.title}</h1>

            <div className = "row mt-3" style={{ justifyContent : "center" }}>
                <div className="media">
                    <div className="media-body">
                        <h5 className="mt-0 mb-1">Ingredients</h5>
                        <p className="mb-5">{this.props.ingredients}</p>
                        <h5 className="mt-0 mb-1">Instructions</h5>
                        <p className="mb-5">{this.props.instructions}</p>
                        <a href={"/recipes/"+this.props.id+"/edit"} className="btn btn-info mr-3">Edit Recipe</a>

                        <button type="button" class="btn btn-danger" data-toggle="modal" data-target="#modal">Delete Recipe</button>

                        <div class="modal fade" id="modal" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                          <div class="modal-dialog modal-dialog-centered" role="document">
                            <div class="modal-content">
                              <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalCenterTitle">Warning!</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                  <span aria-hidden="true">&times;</span>
                                </button>
                              </div>
                              <div class="modal-body">
                                <p className="">Are you sure you want to delete this recipe?</p>
                              </div>
                              <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                <form method="POST" action={"/recipes/"+ this.props.id+"?_method=delete"}>
                                    <input name="id" type="hidden" defaultValue={this.props.id}/>
                                    <input type="submit" className="btn btn-danger mr-3" value="Delete Recipe"/>
                                </form>
                              </div>
                            </div>
                          </div>
                        </div>
                    </div>
                    <img className="ml-3" src={this.props.img} alt="Generic placeholder image" />
                </div>
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

module.exports = singlePage;