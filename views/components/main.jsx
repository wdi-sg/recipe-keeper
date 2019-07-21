var React = require('react');

var CardDeck = require('./carddeck');
var IndividCard = require('./individualcard')
var NewForm = require('./newform');



class Main extends React.Component {
  render() {
    console.log("\n<Main> Added")

    const reqType = this.props.requestType
    let content;
    let colSize
    console.log("request type: " + reqType)

    switch (reqType) {
        case 1:
            content = <CardDeck data = {this.props.data}/>;
            colSize = "col-10"
        break;
        case 2:
            content = <IndividCard data = {this.props.data}/>;
            colSize = "col"
        break;
        case 3:
            content = <NewForm/>;
            colSize = "col-8"
        break;
        default:
        text = "";
    }



    return (
        <div className={colSize}>
        {content}
        </div>
    );
  }
}

module.exports = Main;