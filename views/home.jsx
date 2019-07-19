var React = require('react');
var DefaultLayout = require('./layouts/default');

class Home extends React.Component {
  render() {
    const listOfRecipes = this.props.recipe.map(item=>{
        return <div>
        <li>{item.title}</li>
        <li>{item.utensils}</li>
        <li>{item.seasoning}</li>
        <li>{item.ingredients}</li><br/>
        </div>
    })
    return (
      <DefaultLayout title={this.props.title}>
        <h1>Hello</h1>
        {listOfRecipes}
      </DefaultLayout>
    );
  }
}

module.exports = Home;