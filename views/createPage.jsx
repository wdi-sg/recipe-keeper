
var React = require('react');
var DefaultLayout = require('./layouts/default');
var NavLayout = require('./layouts/navlayout');

class createPage extends React.Component {
  render() {
    return (
   <DefaultLayout  title="New Recipe">
       <NavLayout>
      <li class="nav-item">
        <a class="nav-link mt-4" href="/recipes">Home </a>
      </li>
       <li class="nav-item active">
      <a class="nav-link mt-4">Add</a>
      </li>
      </NavLayout>
<div className="container h-100">
    <div className="row h-100 justify-content-center align-items-center">
        <div className="col-10 col-md-8 col-lg-6">
<form className="mt-5" method="POST" action="/recipes">
  <div className="form-group">
  <h1>New Recipe</h1>
    <label for="title">Title</label>
    <input type="text" className="form-control" name="title"/>
  </div>
  <div className="form-group">
    <label for="ingredients">Ingredients</label>
    <textarea className="form-control" name="ingredients" rows="3" style={{resize: "none"}}></textarea>
  </div>
  <div className="form-group">
    <label for="instructions">Instructions</label>
    <textarea className="form-control" name="instructions" rows="3" style={{resize: "none"}}></textarea>
  </div>
     <div className="d-flex flex-row-reverse">
    <button type="submit" className="btn btn-primary btn-customized">Add</button>
    </div>
</form>
        </div>
    </div>
</div>
 </DefaultLayout>
    );
  }
}

module.exports = createPage;