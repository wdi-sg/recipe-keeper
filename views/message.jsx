const React = require('react');
const PropTypes = require('prop-types');
const DefaultLayout = require('./layouts/default');

class Message extends React.Component {
    render() {

        return (
        // Put text here
        <DefaultLayout title={this.props.title}>
          <div className="display-4">
            {this.props.title}
          </div>
        <p>
            {this.props.message}
        </p>
      </DefaultLayout>
    )};
}

module.exports = Message;
