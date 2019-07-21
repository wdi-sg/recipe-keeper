const React = require('react');
const DefaultLayout = require('./layouts/default');

class Ingredients extends React.Component {
  render() {
    let headerTitle = "Ingredients | Recipe Keeper";

    let ingArr = this.props.ingredients.map((ing, i)=> {
        return (
            <div>
                <a href="">{ing}</a>
            </div>
        )
    })

    return (
      <DefaultLayout title={headerTitle}>
        <h1>All Ingredients</h1>
        <div>{ingArr}</div>
      </DefaultLayout>
    );
  }
}

module.exports = Ingredients;