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
									<input name="title" className="form-control" placeholder="Title here" required/>
								</div>
							</div>
							<div className="form-group row">
								<label htmlFor="name" className="col-sm-2 col-form-label">Ingredients</label>
								<div className="col-sm-10">
									<textarea name="ingredients" className="form-control" placeholder="Put ingredient names, amount and notes. (Seperate them by commas). To include more ingredients, enter them in a new line." required/>
								</div>
							</div>
							<div className="form-group row">
								<label htmlFor="name" className="col-sm-2 col-form-label">Instructions</label>
								<div className="col-sm-10">
									<textarea name="instructions" className="form-control" placeholder="Instructions on how to prepare" required/>
								</div>
							</div>
							<div className="form-group row">
								<label htmlFor="name" className="col-sm-2 col-form-label">Image Link</label>
								<div className="col-sm-10">
									<input type="url" name="img" className="form-control" placeholder="Image URL here" required/>
								</div>
							</div>
							<div className="buttons text-center">
								<button type="submit" className="btn btn-primary">Submit</button>
								<a href="/recipes"><button type="button" className="btn btn-dark">Return</button></a>
							</div>
						</form>
					</div>
				</div>
			</DefaultLayout>
		);
	}
}

module.exports = AddForm;