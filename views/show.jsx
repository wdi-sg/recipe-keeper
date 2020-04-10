var React = require('react');
class Show extends React.Component {
    render() {
        const editLink = '/recipes/' + this.props.id + "/edit";
        const deleteLink = '/books/' + this.props.id + "?_method=delete";

        return (
            <html>
                <head>
                    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossOrigin="anonymous"/>
                </head>
                <body>
                    <div className="container">
                        <nav className="navbar fixed-top bg-light">
                            <br/>
                            <a href="/" className="navbar-brand">Home</a>
                            <a href={editLink}  className="navbar-brand">Edit Recipe</a>
                            <br/>
                        </nav>

                        <div>
                            <h4>Title</h4>
                            <p>{this.props.title}</p>
                            <h4>Ingredients</h4>
                            <p>{this.props.ingredients}</p>
                            <h4>Instructions</h4>
                            <p>{this.props.instructions}</p>
                            <br/>
                        </div>

                        <div>
                            <form method="POST" action={deleteLink}>
                                <input type="submit" value="delete book"/>
                            </form>
                        </div>




                    </div>
                </body>
            </html>
        );
    };
};

module.exports = Show;