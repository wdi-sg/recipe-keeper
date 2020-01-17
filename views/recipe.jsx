var React = require('react');
var Template = require('./template')

class Recipe extends React.Component {
    render() {
        let recipe = this.props
        let editLink = "/recipes/"+recipe.index+"/edit"
        return (
                <html>
                    <Template />
                    <body>
                        <div className="container">
                            <div>
                                <h1>{recipe.title}</h1>
                                <p>{recipe.ingredients}</p>
                                <p>{recipe.instructions}</p>
                            </div>
                            <button type="link" className="btn btn-primary"><a className="text-white" href={editLink}>Edit</a></button>
                        </div>
                    </body>
                </html>
        );
    }
}

module.exports = Recipe;