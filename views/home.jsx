var React = require('react');

var Head = require('./components/head');
var NavBar = require('./components/navbar');
var NavSide = require('./components/navside');

var Main = require('./components/main');
var Footer = require('./components/footer');

var CardDeck = require('./components/card');
var Card = require('./components/card');



class Home extends React.Component {
  render() {
    console.log("\nStarto")
    const reqType = this.props.requestType;
    const recipeList = this.props.recipeList




    return (
      <html>
      <Head/>
      <body>
        <div className="container-fluid">
          <div className="row">
            <NavBar/>
          </div>
          <div className="row">
            <NavSide/>
            <Main requestType = {this.props.requestType} recipeList = {this.props.recipeList}/>
          </div>
          <div className="row">
            <Footer/>
          </div>
        </div>
      </body>
      </html>
      );
  }
}



module.exports = Home;