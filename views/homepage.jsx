var React = require('react');
var Layout = require('./layout');
var Header = require('./header');
var RecipeSearch = require('./recipesearch');

class Home extends React.Component {
  render() {
    return (
                <Layout>
                    <div>
                      <h1>The Sexy Hotpots Cookery</h1>
                    </div>
                    <RecipeSearch/>
                </Layout>
    );
  }
}

module.exports = Home;


                       // <p> Today we are going to learn how to make.... {this.props.title}</p>
                       // <p> You will need {this.props.ingredients[0]} and {this.props.ingredients[1]}</p>
                       // <p> Instructions: {this.props.instructions}</p>