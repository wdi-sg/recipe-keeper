const React = require('react');

class Show extends React.Component {
    render() {

        const editLink = '/recipe/' + this.props.id + '/edit';
        const deleteLink = '/recipe/' + this.props.id + '?_method=delete';



        return (
            <html>
            <head>
            <link rel="stylesheet" href="/style.css"/>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossOrigin="anonymous"/>
            </head>
                <body>
                    <div className="show-page">


                    <ul class="nav justify-content-center">
                        <li class="nav-item">
                        <a class="nav-link" href="/recipe">Home</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link active" href={editLink}>Edit Recipe</a>
                      </li>
                       <li class="nav-item">
                        <a class="nav-link" href="/recipe/add">Add Recipe</a>
                      </li>
                    </ul>


                    <ul class="list-group">
                      <li class="list-group-item bg-info heading">Title</li>
                      <li class="list-group-item text">{this.props.title}</li>
                      <li class="list-group-item bg-info heading">Ingredients</li>
                      <li class="list-group-item text">{this.props.ingredients}</li>
                      <li class="list-group-item bg-info heading">Instructions</li>
                      <li class="list-group-item text">{this.props.instructions}</li>
                    </ul>
                   </div>
                    <div className="delete-button">
                    <form method="POST" action={deleteLink}>
                    <button type="submit" class="btn btn-light">Delete Recipe</button>
                    </form>
                    </div>
                </body>
            </html>
        )
    }
}

module.exports = Show;