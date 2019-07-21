var React = require('react');
var HeaderBarLess = require('./components/headerbar_less.jsx');

class Home extends React.Component {
  render() {
      let recipeData = this.props.recipes.map( (recipe, index)=> {
          return <a href={'/recipes/'+recipe.id}><div className='card' style={{ backgroundImage: 'url('+recipe.img+')'}}><div className='nameplate'><p>{recipe.title}</p></div></div></a>;
      });
    return (
      <html>
        <head>
            <link rel="stylesheet" href="/css/style.css"></link>
        </head>
            <body>

                <div className="container_row_wrap">
                <HeaderBarLess data={this.props} pageTitle="Lim Peh Recipe Keeper"/>

                    {recipeData}
                </div>
                </body>
      </html>
    );
  }
}

module.exports = Home;
