import React from 'react'
import PropTypes from 'prop-types'

class Message extends React.Component {

    render() {

        return (
          <div>
        <h1>Add Recipe</h1>
        <form action="/recipes" method="POST">
            <p>Title:
                <input type="text" name="title"/></p>
            <p>Ingredients:
                <input type="text" name="ingredients"/></p>
            <p>Method:
                <input type="text" name="method"/></p>
                <input type="submit"/>
        </form>
        </div>
      )
    }
}

export default Message;
