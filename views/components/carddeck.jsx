var React = require('react');

var Card = require('./card');

class CardDeck extends React.Component {
  render() {
    console.log("\nCardDeck component Added")

    let recipeCards = this.props.data.map(recipe=>{
        return <Card data = {recipe}/>
    })

    return (

     <div className="card-deck flex-wrap">
     {recipeCards}

     </div>
     );
}
}

module.exports = CardDeck;