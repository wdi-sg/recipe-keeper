
var React = require('react');
var DefaultLayout = require('./layouts/default');
var NavLayout = require('./layouts/navlayout');

class editPage extends React.Component {
  render() {
    let formURL = "/recipes/"+this.props.id+"?_method=put";
    return (
   <DefaultLayout  title="Edit Recipe">
      <NavLayout sort ="2">
      <li className="nav-item">
        <a className="nav-link mt-4" href="/recipes">Home </a>
      </li>
       <li className="nav-item">
      <a className="nav-link mt-4" href="/recipes/new">Add</a>
      </li>
      </NavLayout>
<div className="container h-100">
    <div className="row h-100 justify-content-center align-items-center">
        <div className="col-10 col-md-8 col-lg-6">
<form className="mt-5" method="POST" action={formURL}>
  <div className="form-group">
  <h1>Edit Recipe</h1>
    <label htmlFor="title">Title</label>
    <input type="text" className="form-control" name="title" value={this.props.title}/>
  </div>
  <p className="text-danger">{this.props.message1}</p>
  <div className="form-group">
    <label htmlFor="ingredients">Ingredients</label>
    <textarea className="form-control" name="ingredients" rows="3" value={this.props.ingredients} style={{resize: "none"}}></textarea>
  </div>
    <p className="text-danger">{this.props.message2}</p>
  <div className="form-group">
    <label htmlFor="instructions">Instructions</label>
    <textarea className="form-control" name="instructions" rows="3" value={this.props.instructions} style={{resize: "none"}}></textarea>
        <p className="text-danger">{this.props.message3}</p>
  </div>
    <button type="submit" className="btn btn-primary btn-customized">Edit</button>
</form>
        </div>
    </div>
</div>
 </DefaultLayout>
    );
  }
}

module.exports = editPage;