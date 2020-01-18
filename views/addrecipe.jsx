import React from 'react'
import PropTypes from 'prop-types'

class AddRecipe extends React.Component {

    render() {

        return (<div>
            <h1>Add Recipe</h1>
            <form action="/recipes" method="POST">
                <p>Title:
                    <input type="text" name="title"/></p>
                <p>Ingredients:
                    <input type="textarea" name="ingredients" rows="3"/></p>
                <p>Method:
                    <input type="textarea" name="method" rows="3"/></p>
                <input type="submit"/>
            </form>
        </div>)
    }
}

export default AddRecipe;
