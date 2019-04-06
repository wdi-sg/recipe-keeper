var React = require('react');
var Header = require('./header');



class Home extends React.Component {
  render() {
    return (
    <html>
        <Header/>
        <body>
          <div>
            <h1>The Sexy Hotpots Cookbook</h1>
            <p> Today we are going to learn how to make.... {this.props.name}</p>
            <p> </p>
          </div>
      </body>
    </html>
    );
  }
}

module.exports = Home;