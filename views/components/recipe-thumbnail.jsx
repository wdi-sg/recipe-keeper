var React = require('react');

class RecipeThumbnail extends React.Component {
	render() {
		let link = "/recipes/" + this.props.recipe.id;
		let imgStyle = {
			backgroundImage: "url(" + this.props.recipe.img  + ")"
		};
		return (
			<div className="col col-6 col-md-3">
				<a href={link}>
					<div className="recipe-thumbnail card">
						<div className="card-img" style={imgStyle}> </div>
						<div className="card-header">{this.props.recipe.id}. {this.props.recipe.title}</div>
					</div>
				</a>
			</div>
		);
	}
}

module.exports = RecipeThumbnail;