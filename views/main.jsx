var React = require('react');
var DefaultLayout = require('./layouts/default');

class Main extends React.Component {
  render() {
    return (
          
          <DefaultLayout title="Recipe Top Page">
<h1>Food Recipes</h1>
<img src="/food-tray.svg" className="align-center"/>


          </DefaultLayout>

    );
  }
}

module.exports = Main;