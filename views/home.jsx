var React = require('react');
var Layout = require('./layoutnav')

//Main JSX
class Home extends React.Component {
  render() {
console.log("PRINT HOME PAGEEEEEEEE");
console.log(this.props.recipes)
var cardArray = this.props.recipes
    var cards = cardArray.map((item) => {
        return(
                <div class="card col-lg-6" style={{width: "18rem"}}>
                  <img class="card-img-top" src={item.images} alt="Card image cap"/>
                  <div class="card-body">
                    <h5 class="card-title">{item.title}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">{item.ingredients}</h6>
                    <p class="card-text">{item.instructions}</p>
                </div>
            </div>
            )
            });

return (
                   <Layout>
                        <div class = "container mt-3">
                            <div class = "row">
                            {cards}
                            </div>
                        </div>
                   </Layout>
    );
  }
}

module.exports = Home;