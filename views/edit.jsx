var React = require('react');
class Edit extends React.Component {
    render() {

        const link = "/recipes/"+this.props.index+"?_method=put";
        const editLink = '/recipes/' + this.props.index + "/edit";

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
                                    <div className="form-group">
                                        <br/>
                                        <label>Recipe ID: </label>
                                        <input type="text" id="exampleFormControlInput1" className="form-control" name="id" defaultValue={this.props.recipe.id} readOnly />
                                    </div>
                                    <div className="form-group">
                                        <label>Date created: </label>
                                        <input type="text" id="exampleFormControlInput1" className="form-control" name="dateCreated" defaultValue={this.props.recipe.dateCreated} readOnly />
                                    </div>

                                    <br/>
                                    <div className="form-group">
                                        <label>Recipe Title</label>
                                        <input type="text" className="form-control" id="exampleFormControlInput1" name="title" defaultValue={this.props.recipe.title} maxLength="50" required/>
                                    </div>

                                    <div className="form-group">
                                        <label>Ingredients</label>
                                        <input type="text" className="form-control" id="exampleFormControlInput1" name="ingredients" defaultValue={this.props.recipe.ingredients}/>
                                    </div>

                                    <div className="form-group">
                                        <label>Instructions</label>
                                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" name="instructions" defaultValue={this.props.recipe.instructions}></textarea>
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