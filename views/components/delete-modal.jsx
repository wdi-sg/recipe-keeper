var React = require('react');

class DeleteModal extends React.Component {
	render() {
		let recipe = this.props.recipe;
		let formLink = "/recipes/"+recipe.id+"?_method=DELETE";
		return (
			<div>
				<div className="modal fade" id={this.props.modal} tabIndex="-1" role="dialog" aria-labelledby="deleteAlertTitle" aria-hidden="true">
					<div className="modal-dialog modal-dialog-centered" role="document">
						<div className="modal-content">
							<div className="modal-header">
								<h5 className="modal-title" id="deleteAlertTitle">Confirm delete the following?</h5>
							</div>
							<div className="modal-body">
								<div className="container">
									<div className="row">
										<div className="col-12">
											<h4>{recipe.id}. {recipe.title}</h4>
										</div>
									</div>
								</div>
							</div>
							<div className="modal-footer">
								<form method="POST" action={formLink}>
									<button type="submit" className="btn btn-danger">Confirm Delete</button>
								</form>
								<button type="button" className="btn btn-dark" data-dismiss="modal">Return</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

module.exports = DeleteModal;