var React = require('react');
var Template = require('./template')

class Edit extends React.Component {
    render() {
        const recipe = this.props;
        let actionStr = '/recipes/'+recipe.index+'?_method=put'
        return (
                <html>
                    <Template />
                    <body>
                        <div className="container">
                            <div className="col-6">
                                <form action={actionStr} method="POST">
                                    <div className="form-group">
                                        <label>Title :</label>
                                        <input type="text" className="form-control" placeholder="Title of Recipe" name="title" value={recipe.title}/>
                                    </div>
                                    <div className="form-group">
                                        <label>Ingredients :</label>
                                        <input type="text" className="form-control" placeholder="ID" name="ingredients" value={recipe.ingredients}/>
                                    </div>
                                    <div className="form-group">
                                        <label>Instructions :</label>
                                        <input type="text" className="form-control" placeholder="ID" name="instructions" value={recipe.instructions}/>
                                    </div>
                                    <button type="submit" className="btn btn-primary">Submit</button>
                                </form>
                            </div>
                        </div>
                    </body>
                </html>
        );
    }
}

module.exports = Edit;