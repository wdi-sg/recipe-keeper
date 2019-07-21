const React = require('react');


class RecipeBlock extends React.Component {
  render() {
    // let index = this.props.index;
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