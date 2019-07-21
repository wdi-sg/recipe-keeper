const React = require('react');
const DefaultLayout = require('./layouts/default');

class Ingredients extends React.Component {
  render() {
    let headerTitle = "Ingredients | Recipe Keeper";

    return (
      <DefaultLayout title={headerTitle}>
        <h1>All Ingredients</h1>
        <div>Recipe 1</div>
      </DefaultLayout>
    );
  }
}

module.exports = Ingredients;