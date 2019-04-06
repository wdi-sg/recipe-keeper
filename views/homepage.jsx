var React = require('react');
var Layout = require('./layout');
var Header = require('./header');
var RecipeSearch = require('./recipesearch');

class Home extends React.Component {
  render() {
    return (
                <Layout>
                    <div>
                      <h1>The Sexy Hotpots Cookbook</h1>
                       <p> Today we are going to learn how to make.... {this.props.name}</p>
                       <p> </p>
                    </div>
                    <RecipeSearch/>
                </Layout>
    );
  }
}

module.exports = Home;