var React = require('react');
var DefaultLayout = require('./layouts/default');

class Recipe extends React.Component {
  render() {
console.log(this.props);
    let itemElements = this.props.data.map( (o) => {
        return <div class="albumItem">
                    <a href={ `/recipes/${o.id}` }><img src={o.img}/></a>
                    <div class="centered">{ o.title }</div>
               </div>
    });

    return (
        <div className="homeAlbum">
            { itemElements }
        </div>
    );
  }
}

class Home extends React.Component {
  render() {

    return (
            <DefaultLayout title="Recipe Keeper">
                <h3 className="homeHeader">All Recipes</h3>
                <Recipe data= { this.props.recipes }/>
            </DefaultLayout>
    );
  }
}

module.exports = Home;