var React = require('react');
var Template = require('./template')
var NavHead = require('./navHead')

class Search extends React.Component {
    render() {
        const recipes = this.props.recipes;
        let index = 0;
        const recipeElements = recipes.map( recipe => {
            index++
            let hrefStr = "/recipes/"+index
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

module.exports = Search;