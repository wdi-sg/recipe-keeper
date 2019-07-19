var React = require('react');
var DefaultLayout = require('./layouts/default');
var Form = require("./form");

class Add extends React.Component {
  render() {

    return (
      <DefaultLayout title={this.props.title}>
      <Form method="POST" action="/recipes"/>

      </DefaultLayout>
    );
  }
}

module.exports = Add;