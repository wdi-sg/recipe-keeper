const React = require('react');

export default class SingleRecipeEdit extends React.Component{
    render(){
        let {title,ingredients,instructions,id} = this.props;
        return (
            <form method="POST" action={`/recipes/${id}?_method=put`}>
                Title: <input type="text" name="title" defaultValue={title}/>
                <br/>
                Ingredients: <input type="text" name="ingredients" defaultValue={ingredients}/>
                <br/>
                Instructions: <input type="text" name="instructions" defaultValue={instructions}/>
                <br/>
                <input type="submit"/>
            </form>
        )
    }
}