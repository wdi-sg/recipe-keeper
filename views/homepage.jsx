var React = require('react');

class Home extends React.Component {
  render() {
    var pokeId = this.props.id;
    return (
      <div>
        <h1>The Sexy Hotpots Cookbook</h1>
      </div>
    );
  }
}

module.exports = Home;