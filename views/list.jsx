var React = require('react');
var Template = require('./template')
var NavHead = require('./navHead')

class List extends React.Component {
    render() {
        const recipes = this.props.recipes;
        const recipeElements = recipes.map( recipe => {
            let count = 0;
            count++
            let hrefStr = "/recipes/"+count
            return (<div><a href={hrefStr}>{recipe.title}</a></div>)
        })
        return (
                <html>
                    <Template />
                    <body>
                        <div className="container">
                            <NavHead />
                            {recipeElements}
                        </div>
                    </body>
                </html>
        );
    }
}

module.exports = List;