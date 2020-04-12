var React = require('react');
class Edit extends React.Component {
    render() {

        const link = "/recipes/"+this.props.id+"?_method=put";
        const editLink = '/recipes/' + this.props.id + "/edit";

        return (
            <html>
                <head>
                    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossOrigin="anonymous"/>
                </head>
                <body>

                        <nav className="navbar bg-light">
                            <a href="/" className="navbar-brand">&#60; Home</a>
                            <h3>Edit Page</h3>
                            <a href={editLink} className="navbar-brand">&#8635; Reset</a>
                        </nav>

                        <div className="container">
                            <br/>
                            <div className="col">
                                <form  method="POST" action={link}>
                                    <br/>
                                    <div className="form-group">
                                        <h4>Recipe Id: {this.props.id}</h4>
                                        <br/>
                                    </div>

                                    <div className="form-group">
                                        <label>Recipe Title</label>
                                        <input type="text" className="form-control" id="exampleFormControlInput1" name="title" defaultValue={this.props.title} />
                                    </div>

                                    <div className="form-group">
                                        <label>Ingredients</label>
                                        <input type="text" className="form-control" id="exampleFormControlInput1" name="ingredients" defaultValue={this.props.ingredients}/>
                                    </div>

                                    <div className="form-group">
                                        <label>Instructions</label>
                                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" name="instructions" defaultValue={this.props.instructions}></textarea>
                                    </div>
                                    <button type="submit" className="btn btn-primary mb-2">Submit</button>
                                </form>
                            </div>
                    </div>
                </body>
            </html>
        );
    };
};

module.exports = Edit;