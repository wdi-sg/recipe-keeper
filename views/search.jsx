var React = require('react');
var HeaderBarLess = require('./components/headerbar_less.jsx');

class Search extends React.Component {
  render() {
      let recipeData = this.props.recipes.map( (recipe, index)=> {
          return <a href={'/recipes/'+recipe.id}><div className='card' style={{ backgroundImage: 'url('+recipe.img+')'}}><div className='nameplate'><p>{recipe.title}</p></div></div></a>;
      });
    return (
      <html>
        <head>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"></link>
            <link rel="stylesheet" href="/css/style.css"></link>
        </head>
            <body>

                <div className="container_row_wrap">
                    <HeaderBarLess data={this.props} pageTitle="Search Recipes"/>
                    <div className="spacer"></div>
                    <div>
                    <form method="get" action="/recipes/search" className="form-inline">
                        <input name="keywords" type="text" className="form-control form-control-lg"></input>
                        <input value="Submit" type="image" src="../images/search_g.svg" width="40px" height="40px"/>
                    </form>
                    </div>
                </div>
                <div className="container_row_wrap">
                    {recipeData}
                </div>
            </body>
      </html>
    );
  }
}

module.exports = Search;
