var React = require('react');


class Recipe extends React.Component {
  render() {
    return (
      <html>
        <body>
          <div class="row">
            <div class="cell">{this.props.recipeData.name} </div>
            <div class="cell"><a class="table-data" href={"/recipes/"+this.props.recipeData.id+""}><img class="icon" src="/images/detail.jpeg" /></a></div>
            <div class="cell"><a class="table-data" href={"/recipes/"+this.props.recipeData.id+"/edit"}><img class="icon" src="/images/edit.jpeg" /></a></div>
            <div class="cell"><a class="table-data" href={"/recipes/"+this.props.recipeData.id+"/delete"}><img class="icon" src="/images/delete.jpeg" /></a></div>
          </div>
        </body>
      </html>
    );
  }
}

module.exports = Recipe;