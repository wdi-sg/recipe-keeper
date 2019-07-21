var React = require('react');


class RecipePreview extends React.Component {
  render() {
    var url = "/recipes/" + this.props.data.id;

    return (

        <div className = "col-xs-12 col-sm-6 col-md-4">
          <div className = "card">
            <a href={url}>
              <div className = "food-image">
                <img className="u-max-full-width" src={this.props.data.image}/>
              </div>
              <div className = "info">
                <h2>{this.props.data.title}</h2>
                <p className="description">{this.props.data.description}</p>
                <p className="cooking-time">{this.props.data.cookingTime}</p>
              </div>
            </a>
          </div>
        </div>

    );
  }
}

module.exports = RecipePreview;
