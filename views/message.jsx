import React from 'react'
import PropTypes from 'prop-types'

class Message extends React.Component {
    render() {

        return (
        // Put text here
        <p>
            {this.props.message}
        </p>)
    }
}

export default Message;
