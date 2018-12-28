var React = require('react');
var Default = require('./default');


class Recipe extends React.Component{
    render(){
        let recipe = {this.props}
        return (
            <React.Component>
                <img src={recipe.photo}/>
                <h1>{recipe.name}</h1> 
                <h1>Ingredients</h1>
                <h1>Instructions</h1>
            </React.Component>
        )
    }
}

module.exports = Recipe;