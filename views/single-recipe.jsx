const React = require('react');

export default class SingleRecipe extends React.Component{
    render(){
        let {title,ingredients,instructions} = this.props.recipe;
        return (
            <h1>{title}</h1>
        )
    }
}