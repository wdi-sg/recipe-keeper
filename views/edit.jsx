const React = require('react');

class Edit extends React.Component {
    render() {

        const editRecipe = '/recipe/' + this.props.id + '?_method=put';

        return (
            <html>
            <head>
            <link rel="stylesheet" href="/style.css"/>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossOrigin="anonymous"/>
            </head>
                <body>
                    <div className="edit-page">

                    <ul class="nav justify-content-center nav-tabs">
                          <li class="nav-item">
                            <a class="nav-link active" href="/recipe">Home</a>
                          </li>
                          </ul>

                        <form method="POST" action={editRecipe}>
                        <div class="form-group">
                            <label for="exampleFormControlInput1 add-title">Title</label>
                            <input class="form-control form-control-lg" id="exampleFormControlInput1" type="text" name="title" value={this.props.title}/>
                            <label for="exampleFormControlInput1 add-title">Ingredients</label>
                            <input class="form-control form-control-lg" id="exampleFormControlInput1" type="text" name="ingredients" value={this.props.ingredients}/>
                            <label for="exampleFormControlInput1 add-title">Instructions</label>
                            <input class="form-control form-control-lg" id="exampleFormControlInput1" type="text" name="instructions" value={this.props.instructions}/>
                            <button type="submit" class="btn btn-light btn-lg del-button">Submit</button>
                      </div>
                            </form>
                    </div>
                </body>
            </html>


            )
    }
}

module.exports = Edit;