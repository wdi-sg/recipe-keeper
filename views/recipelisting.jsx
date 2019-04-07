var React = require('react');
var Layout = require('./layout');
const recipejson = require('../recipe.json');



var map = recipejson.recipes.map(item => {
    let url = "http://localhost:3000/recipes/";
    let id = item.id - 1;
    url = url + id;
    return <h5> <a href={url}> {item.title} </a> </h5>;
});



//             let recipeIngredients = this.props.ccb.ingredients.map(item => {
//                               return <li>{item}</li>
//                             });

class RecipeListing extends React.Component {
  render() {
    return (
                <Layout>
                    <div>
                      <h1> Recipe Listing </h1>
                      {map}
                    </div>
                    <br/> <hr/>
                </Layout>
    );
  }
}

module.exports = RecipeListing;