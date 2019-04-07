var React = require('react');
var Layout = require('./layout');

class Unknown extends React.Component {
  render() {
    return (
                <Layout>
                    <div>
                      <h1> RECIPE DOES NOT EXIST</h1>
                      <h1> <a href="http://localhost:3000">CLICK HERE TO RETURN TO MAIN PAGE</a> </h1>
                    </div>
                </Layout>
    );
  }
}

module.exports = Unknown   ;