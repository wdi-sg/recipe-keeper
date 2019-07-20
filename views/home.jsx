var React = require('react');
var Layout = require('./layout.jsx');
var List = require('./list.jsx');

class Home extends React.Component {
  render() {
        let recipeList = this.props.recipes;
    return (
        <Layout>
            <List recipeList={recipeList}></List>
        </Layout>
    );
  }
}


module.exports = Home;