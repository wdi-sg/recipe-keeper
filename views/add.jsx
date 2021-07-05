var React = require('react');
var DefaultLayout = require('./layouts/default');
var Form = require("./components/form");

class Add extends React.Component {
  render() {

    return (
      <DefaultLayout title={this.props.title}>
      <h1>Hello</h1>
      <Form method="POST" action="/recipes"/>

      </DefaultLayout>
    );
  }
}

module.exports = Add;