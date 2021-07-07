var React = require('react');

class RecipeThumbnail extends React.Component {
	render() {
		let link = "/recipes/" + this.props.recipe.id;
		let imgStyle = {
			backgroundImage: "url(" + this.props.recipe.img  + ")"
		};
		let dateElement = "";
		if (this.props.dateAdded) {
			const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
			let dateAdded = this.props.dateAdded;
			let dateDisplay = dateAdded.getDate()+" "+months[(dateAdded.getMonth())]+" "+dateAdded.getFullYear();
			dateElement = <div className="card-body"><small>{dateDisplay}</small></div>;
		}
		return (
			<div className="col col-6 col-md-3">
				<a href={link}>
					<div className="recipe-thumbnail card">
						<div className="card-img" style={imgStyle}> </div>
						<div className="card-header"><span className="recipe-title">{this.props.recipe.title}</span></div>
						{dateElement}
					</div>
				</a>
			</div>
		);
	}
}

module.exports = RecipeThumbnail;