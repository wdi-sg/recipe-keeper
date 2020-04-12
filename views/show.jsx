var React = require('react');
class Show extends React.Component {
    render() {

        const editLink = '/recipes/' + this.props.index + "/edit";
        const deleteLink = '/recipes/' + this.props.index + "?_method=delete";


        return (
            <html>
                <head>
                    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossOrigin="anonymous"/>
                </head>
                <body>
                    <nav className="navbar bg-light">
                        <a href="/" className="navbar-brand">&#60; Home</a>
                        <a href={editLink} className="navbar-brand">&#9998; Edit Recipe</a>
                    </nav>

                    <div className="container">
                        <br/>
                        <div className="col">
                            <div>
                                <h5>Recipe ID: {this.props.recipe.id}</h5>
                                <p>Date created: {this.props.recipe.dateCreated}</p>
                                <br/>
                                <h5>Title</h5>
                                <p>{this.props.recipe.title}</p>
                                <h5>Ingredients</h5>
                                <p>{this.props.recipe.ingredients}</p>
                                <h5>Instructions</h5>
                                <p>{this.props.recipe.instructions}</p>
                                <br/>
                            </div>

                            <div>

                                <form method="POST" action={deleteLink}>
                                    <p>Discard recipe? </p>
                                    <input type="submit" defaultValue="Delete Recipe" className="btn btn-danger" data-toggle="modal" data-target="#confirm-delete" />
                                </form>
                            </div>
                        </div>
                    </div>
                </body>
            </html>
        );
    };
};

module.exports = Show;