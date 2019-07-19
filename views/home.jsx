var React = require('react');
var DefaultLayout = require('./layouts/default');

class Home extends React.Component {
  render() {
    const listOfRecipes = this.props.recipe.map(item=>{
        let index = this.props.recipe.indexOf(item) + 1;
        let url = '/recipes/'+(index);
        return <li><a href={url}>{item.title}</a></li>
    })
    return (
      <DefaultLayout title={this.props.title}>
        <h1>Hello</h1>
        <ul>
            {listOfRecipes}
        </ul>
      </DefaultLayout>
    );
  }
}

module.exports = Home;