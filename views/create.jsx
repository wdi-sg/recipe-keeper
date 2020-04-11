var React = require('react');
class Create extends React.Component {
    render() {

        return (
            <html>
                <head>
                    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossOrigin="anonymous"/>
                </head>
                <body>

                    <nav className="navbar bg-light">
                        <a href="/" className="navbar-brand">&#60; Home</a>
                    </nav>

                    <div className="container">
                        <br/>
                        <h3>Create your Recipe</h3>
                        <form  method="POST" action="/recipes">
                          <div className="form-group">
                            <label>Recipe Title</label>
                            <input type="text" className="form-control" id="exampleFormControlInput1" name="title" required />
                          </div>

                          <div className="form-group">
                            <label>Ingredients</label>
                            <input type="text" className="form-control" id="exampleFormControlInput1" name="ingredients" />
                          </div>

                          <div className="form-group">
                            <label>Instructions</label>
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" name="instructions"></textarea>
                          </div>
                          <button type="submit" className="btn btn-primary mb-2">Create</button>
                        </form>
                    </div>
                </body>
            </html>
        );
    };
};

module.exports = Create;