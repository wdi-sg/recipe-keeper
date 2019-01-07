var React = require('react');

class Recipelist extends React.Component{
    render(){
        return(
                <div class="col-6 mx-auto mb-3">
                    <ul class="list-group">
                      <li class="list-group-item active">Title: {this.props.list.title}</li>
                      <li class="list-group-item">Ingredients: {this.props.list.ingredients}</li>
                      <li class="list-group-item">Instructions: {this.props.list.instructions}</li>
                        <li class="list-group-item">
                            <div class="form-inline">
                                <form method="GET" class="mr-3" action="/api/recipes/edit/${obj.recipes[i].id}">
                                    <button type="submit" class="btn btn-secondary">Edit this recipe</button>
                                </form>
                                <form method="POST" action="/api/recipes/delete/${obj.recipes[i].id}?_method=delete">
                                    <button type="submit" class="btn btn-danger">Delete this recipe</button>
                                </form>
                            </div>
                        </li>
                    </ul>
                </div>
            );
    }
}

class Recipehome extends React.Component{
    render(){
        const recipes = this.props.list.map( recipe => {
            return <Recipelist list={recipe}></Recipelist>;
        });
        return(
            <html>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous" />
            <body>
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                  <a class="navbar-brand" href="">RecipeMaker</a>
                  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                  </button>
                  <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                      <li class="nav-item active">
                        <a class="nav-link" href="">Home <span class="sr-only">(current)</span></a>
                      </li>
                       <li class="nav-item active">
                        <a class="nav-link" href="api/recipes/get/1">Recipe 1 <span class="sr-only">(current)</span></a>
                      </li>
                      <li class="nav-item active">
                        <a class="nav-link" href="api/recipes/new">New <span class="sr-only">(current)</span></a>
                      </li>
                      <li class="nav-item active">
                         <a class="nav-link" href="api/recipes/edit/4">Edit <span class="sr-only">(current)</span></a>
                    </li>
                    </ul>
                  </div>
                </nav>
              <div>
                <h1>Here are the recipes available:</h1>
                {recipes}
                </div>
                <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossOrigin="anonymous"></script>
                <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/js/bootstrap.min.js" integrity="sha384-B0UglyR+jN6CkvvICOB2joaf5I4l3gm9GU6Hc1og6Ls7i6U/mkkaduKaBhlAXv9k" crossOrigin="anonymous"></script>
            </body>
          </html>
            );
    }
}

module.exports = Recipehome;