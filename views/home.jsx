const React = require('react');
const DefaultLayout = require('./layouts/default');

class Home extends React.Component {
  render() {
    let headerTitle = "Home | Recipe Keeper";

    return (
      <DefaultLayout title={headerTitle}>
      <div className="home">
        <h1 className="header-text">The Recipe Keeper</h1>
        <div className="home-recipe">
            <a href="./recipes"className="home-p">Recipes</a>
        </div>
        <div className="home-ingredients">
            <a href="./ingredients"className="home-p">Ingredients</a>
        </div>
      </div>
      </DefaultLayout>
    );
  }
}

module.exports = Home;