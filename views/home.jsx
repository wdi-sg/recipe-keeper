
var React = require('react');

class Home extends React.Component {
  render() {
    return (
      <html>
        <head>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossOrigin="anonymous"/>
        </head>
        <body>
          <div>
            <div class="container text-center">
            <h1>Food Food Food!</h1>
            <img class="float-left" src="https://media1.tenor.com/images/9f5ff2129ac255bfeea3d6ae81023ad2/tenor.gif?itemid=11225590"/>
                <form method="POST" action="newrecipe" class="float-right">
                    <h1>Add a new recipe:</h1>
                    <div class="row">

                      <div class="col-md-6">
                        <p>Recipe number:</p>
                        <input type="num" name="id"/><br/><br/>
                        <p>Recipe Title:</p>
                        <input type="text" name="title"/><br/><br/>
                        <p>How it should look like:</p>
                        <input type="url" name="img"/><br/><br/>
                      </div>

                      <div class="col-md-6">
                        <p>Recipe Type:</p>
                        <input type="text" name="type" placeholder="bfast / lunch / dinner"/><br/><br/>
                        <p>Required Ingredients:</p>
                        <input type="text" name="ingredients" class="form-control form-control-large" rows="6"/><br/>
                        <p>Instructions:</p>
                        <input type="text" name="instructions" class="form-control form-control-large"/><br/><br/>
                      </div>
                    </div>
                    <input type="submit" value="Submit"/>
                </form>
            </div>
          </div>
        </body>
      </html>
    );
  }
}

module.exports = Home;