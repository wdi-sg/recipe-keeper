var React = require('react');
var DefaultLayout = require('./layouts/default');


class Individual extends React.Component {
  render() {
    let item = this.props.item

    return (
      <DefaultLayout title={this.props.title}>
        <p>{item.title}</p>
        <p>{item.utensils}</p>
        <p>{item.seasonings}</p>
        <p>{item.ingredients}</p>

      </DefaultLayout>
    );
  }
}

module.exports = Individual;