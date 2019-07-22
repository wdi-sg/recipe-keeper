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
    var data = this.props.data;



    return (
      <html>
      <Head/>
      <body className="bg-dark">
        <div className="container-fluid ">
          <div className="row justify-content-center my-md-2">
            <NavBar num = {data.length}/>
          </div>
          <div className="row justify-content-center my-md-4">
            <Main requestType = {this.props.requestType} data = {this.props.data}/>
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