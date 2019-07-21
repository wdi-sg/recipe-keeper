
var React = require('react');

class singlePage extends React.Component {
  render() {

    return (
      <html>
        <head>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossOrigin="anonymous"></link>
        </head>
        <body>
          <div className="container mx-auto">
                <h1 className="text-center mt-5">{this.props.title}</h1>

            <div className = "row mt-3" style={{ justifyContent : "center" }}>
              <div class="media">
                <div class="media-body">
                  <h5 class="mt-0 mb-1">Ingredients</h5>
                  <p>{this.props.ingredients}</p>
                  <h5 class="mt-0 mb-1">Instructions</h5>
                  <p>{this.props.instructions}</p>
                </div>
                <img class="ml-3" src={this.props.img} alt="Generic placeholder image" />
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