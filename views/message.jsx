const React = require('react');
const PropTypes = require('prop-types');
const DefaultLayout = require('./layouts/default');

class Message extends React.Component {
    render() {

        return (
        // Put text here
        <DefaultLayout>
        <p>
            {this.props.message}
        </p>
      </DefaultLayout>
    )};
}

module.exports = Message;
