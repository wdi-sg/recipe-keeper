var React = require('react');
var DefaultLayout = require('./layouts/default');
var Form = require("./form");

class Add extends React.Component {
  render() {

    let url = "/recipes/"+this.props.id+"?_method=PUT";
    let item = this.props.item;
    return (
      <DefaultLayout title={this.props.title}>
      <Form method="POST" action={url} title={item.title} utensils={item.utensils} seasonings={item.seasonings} ingredients={item.ingredients}/>

      </DefaultLayout>
    );
  }
}

module.exports = Add;