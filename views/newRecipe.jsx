var React = require('react');

class newRecipe extends React.Component {

  render(props){

      return (
        <React.Fragment>
        <html>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous" />
                  <body>
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <a className="navbar-brand" href="http://localhost:3000/">RecipeMaker</a>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                  <li className="nav-item active">
                    <a className="nav-link" href="http://localhost:3000/">Home <span className="sr-only">(current)</span></a>
                  </li>
                   <li className="nav-item active">
                    <a className="nav-link" href="http://localhost:3000/api/recipes/get/1">Recipe 1 <span className="sr-only">(current)</span></a>
                  </li>
                  <li className="nav-item active">
                    <a className="nav-link" href="http://localhost:3000/api/recipes/new">New <span className="sr-only">(current)</span></a>
                  </li>
                  <li className="nav-item active">
                    <a className="nav-link" href="http://localhost:3000/api/recipes/edit/4">Edit <span className="sr-only">(current)</span></a>
                  </li>
                </ul>
              </div>
            </nav>
              <h1>Create a new recipe</h1>
              <div className="form-group col-6 ">
                <form action="/api/recipes/newRecipe" method="post">
                  <input id="title" type="text" name="title" className="form-control mb-1" placeholder="Please enter the title." />
                  <input id="ingredients" type="text" className="form-control mb-1" name="ingredients" placeholder="What are the ingredients?" />
                  <input id="instructions" type="text" className="form-control mb-1" name="instructions" placeholder="What are the instructions?" />
                  <input type="submit" />
                </form>
              </div>
            </body>
          </html>
        </React.Fragment>
      );
    }
  }

  module.exports = newRecipe;