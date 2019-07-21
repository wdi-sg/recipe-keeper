const React = require('react');
const DefaultLayout = require('./layouts/default');

class Home extends React.Component {
  render() {
    let headerTitle = "Home | Recipe Keeper";

    return (
      <DefaultLayout title={headerTitle}>
        <h1>The Recipe Keeper</h1>
        <div>See Recipes</div>
        <div>See Ingredients</div>
        <div>Get Inspiration</div>
      </DefaultLayout>
    );
  }
}

module.exports = Home;