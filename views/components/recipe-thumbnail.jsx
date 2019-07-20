var React = require('react');

class RecipeThumbnail extends React.Component {
	render() {
		const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
		let link = "/recipes/" + this.props.recipe.id;
		let imgStyle = {
			backgroundImage: "url(" + this.props.recipe.img  + ")"
		};
		let dateAdded = this.props.dateAdded;
		let dateDisplay = dateAdded.getDate()+" "+months[(dateAdded.getMonth())]+" "+dateAdded.getFullYear();
		//let dateEdited = this.props.recipe.dateEdited;
		//if (dateEdited instanceof Date && !isNaN(dateEdited)) dateDisplay += ", Edited on "+dateEdited.getDate()+"/"+(dateEdited.getMonth()+1)+"/"+dateEdited.getFullYear();

		return (
			<div className="col col-6 col-md-3">
				<a href={link}>
					<div className="recipe-thumbnail card">
						<div className="card-img" style={imgStyle}> </div>
						<div className="card-header"><span className="recipe-title">{this.props.recipe.title}</span></div>
						<div className="card-body"><small>{dateDisplay}</small></div>
					</div>
				</a>
			</div>
		);
	}
}

module.exports = RecipeThumbnail;