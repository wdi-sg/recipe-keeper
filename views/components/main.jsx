var React = require('react');

var CardDeck = require('./carddeck');
var NewForm = require('./newform');



class Main extends React.Component {
  render() {
    console.log("\n<Main> Added")

    const reqType = this.props.requestType
    let content;
    console.log("request type: " + reqType)

    switch (reqType) {
        case 1:
            content = <CardDeck recipeList = {this.props.recipeList}/>;
        break;
        case 2:
            content = <NewForm/>;
        break;
        default:
        text = "Looking forward to the Weekend";
    }



    return (
        <div className="col-md-9">
        {content}
        </div>
    );
  }
}

module.exports = Main;