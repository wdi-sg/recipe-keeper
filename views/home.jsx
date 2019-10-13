var React = require('react');
var List = require('./homeNav');

class Home extends React.Component {


    render() {

      const navigation = [
  {
    navItem:"View All Recipes",
    pathLink:"/recipes/"

  },
  {
    navItem:"Add New Recipe",
    pathLink:"/recipes/new"
  },
  {
    navItem:"Edit Recipe",
    pathLink:"/recipes/:id/edit"
  }

  ];


        return (
          <List items={navigation}/>
        );
    }
}

module.exports = Home;