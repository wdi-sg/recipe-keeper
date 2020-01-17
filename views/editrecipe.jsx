import React from 'react'
import PropTypes from 'prop-types'

class Message extends React.Component {

    render() {

        const actionURL = `/recipes/${this.props.recipeId}?_method=puts`;
        // action="/pokemon/'+pokemon.id+'?_method=delete"
        return (<div>
            <h1>Edit Recipe</h1>
            <form action={actionURL} method="POST">
                <p>Index:
                    <input type="text" name="index" defaultValue={this.props.recipeId} readOnly="readOnly"/></p>
                <p>Title:
                    <input type="text" name="title" defaultValue={this.props.recipe.title}/></p>
                <p>Ingredients:
                    <input type="text" name="ingredients" defaultValue={this.props.recipe.ingredients}/></p>
                <p>Method:
                    <input type="text" name="method" defaultValue={this.props.recipe.method}/></p>
                <input type="submit"/>
            </form>
        </div>)
    }
}

export default Message;
