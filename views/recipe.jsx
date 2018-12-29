var React = require('react');
var Default = require('./default');


class Recipe extends React.Component{
    render(){
        let recipe = this.props;
        let ingredients = recipe.ingredients.map(ingredient => {
            return <Ingredient name={ingredient}/>;
        });
        let instructions = recipe.instructions.map((instruction,index) => {
            return <Instruction name={instruction} index={index}/>
        });
        return (
            <Default>
                <img src={recipe.photo}/>
                <h2>{recipe.name}</h2> 
                <h2>Ingredients</h2>
                    {ingredients}
                <h2>Instructions</h2>
                    {instructions}
            </Default>
        )
    }
}

class Ingredient extends React.Component{
    render() {
        return (
            <h5>{this.props.name}</h5>
        )
    }
}

class Instruction extends React.Component{
    render() {
        console.log(this.props.index);
        return (
            <h5>{this.props.index + 1}. {this.props.name}</h5>
        )
    }
}

module.exports = Recipe;Ingredient