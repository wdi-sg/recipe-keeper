var React = require('react');
var Template = require('./template')

class List extends React.Component {
    render() {
        const recipes = this.props.recipes;
        const recipeElements = recipes.map( recipe => {
            return (<div><a href="#">{recipe.title}</a></div>)
        })
        return (
                <html>
                    <Template />
                    <body>
                        <div className="container">
                            {recipeElements}
                        </div>
                    </body>
                </html>
        );
    }
}

module.exports = List;