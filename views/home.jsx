var React = require('react');
var DefaultLayout = require('./layouts/default');
var Table = require('./components/table')

class Home extends React.Component {
  render() {

    return (
      <DefaultLayout title={this.props.title}>
            <Table recipe={this.props.recipe}/>
      </DefaultLayout>
    );
  }
}

module.exports = Home;