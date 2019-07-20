const React = require('react');


class RecipeBlock extends React.Component {
  render() {
    let index = this.props.index;
    let title = this.props.recipe.title
    return (
        <div>
            <a href={`/recipes/${index+1}`}>{title}</a>
        </div>
    );
  }
}

module.exports = RecipeBlock;