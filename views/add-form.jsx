var React = require('react');
var DefaultLayout = require('./layouts/default');

class AddForm extends React.Component {
	render() {
		return (
			<DefaultLayout>
				<div className="row">
					<div className="col-12">
						<form method="POST" action="../recipes">
							<div className="form-group row">
								<label htmlFor="name" className="col-sm-2 col-form-label">Title</label>
								<div className="col-sm-10">
									<input name="title" className="form-control" required/>
								</div>
							</div>
							<div className="form-group row">
								<label htmlFor="name" className="col-sm-2 col-form-label">Ingredients</label>
								<div className="col-sm-10">
									<input name="ingredients" className="form-control" required/>
								</div>
							</div>
							<div className="form-group row">
								<label htmlFor="name" className="col-sm-2 col-form-label">Instructions</label>
								<div className="col-sm-10">
									<input name="instructions" className="form-control" required/>
								</div>
							</div>
							<div className="form-group row">
								<label htmlFor="name" className="col-sm-2 col-form-label">Image Link</label>
								<div className="col-sm-10">
									<input name="img" className="form-control" required/>
								</div>
							</div>
							<button type="submit" className="btn btn-dark d-block mx-auto">Submit</button>
						</form>
					</div>
				</div>
			</DefaultLayout>
		);
	}
}

module.exports = AddForm;