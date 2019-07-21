var React = require('react');


class RecipePreview extends React.Component {
  render() {
    var url = "/recipes/" + this.props.data.id;

    return (

        <div className = "row recipe-preview">
          <a href={url}>
            <div className = "six columns">
              <img className="u-max-full-width" src={this.props.data.image}/>
            </div>
            <div className = "six columns">
              <h2>{this.props.data.title}</h2>
              <h3>Ingredients</h3>
              <p>{this.props.data.ingredients}</p>
              <h3>Instructions</h3>
              <p>{this.props.data.instructions}</p>
            </div>
          </a>
        </div>

    );
  }
}

module.exports = RecipePreview;
