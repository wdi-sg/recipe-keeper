const React = require('react');


class RecipeBlock extends React.Component {
  render() {
    let title = this.props.recipe.title;
    let id = this.props.recipe.id;

    return (
        <div>
            <a href={`/recipes/${id}`}>{title}</a>
        </div>
    );
  }
}

module.exports = RecipeBlock;