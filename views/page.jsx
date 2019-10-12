var React = require('react');

const Template = require('./template.jsx');

class Home extends React.Component {
  render() {
    return (
      <Template>
        <div> In the home page</div>
      </Template>
    );
  }
}

module.exports = Home;
