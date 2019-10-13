var React = require('react');
var DefaultLayout = require('./layouts/default');

class Main extends React.Component {
  render() {
    return (
          
          <DefaultLayout pageTitle={this.props.pageTitle}>

<h2 className="text-left"> {this.props.recipeTitle} </h2>

Ingredients:<br/>
{this.props.ingredients}
<br/><br/>
Instructions:<br/>
{this.props.instructions}
<br/><br/>


          </DefaultLayout>

    );
  }
}

module.exports = Main;