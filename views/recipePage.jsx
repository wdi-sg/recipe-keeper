
var React = require('react');
var DefaultLayout = require('./layouts/default');
var NavLayout = require('./layouts/navlayout');

class recipePage extends React.Component {
  render() {
     let formUrl= "/recipes/"+this.props.id+"?_method=delete";
     let linkEdit= "/recipes/"+this.props.id+"/edit";
    return (
      <DefaultLayout title="Recipe">
       <NavLayout sort={false}>
      <li class="nav-item">
        <a class="nav-link mt-4"  href="/recipes">Home </a>
      </li>
    <li class="nav-item">
        <a class="nav-link mt-4" active href="/recipes/new">Add</a>
      </li>
      </NavLayout>


<div className="container h-100">

    <div className="row h-100 justify-content-center align-items-center">
        <div className="col-10 col-md-8 col-lg-6 ml-5 ">
        <div className="row">
                <h1>{this.props.title}</h1>
                </div>
                <div className="row">
                <div className="container h-100 ">
                <div class="row">
                <div class ="col-md-3">
       <label>Ingredients :  </label></div>
       <div class ="col-md-12">
       <p>{this.props.ingredients}></p>
       </div>
</div>
        <div class="row"><div class ="col-md-3">
                    <label className="mr-4">Instructions : </label></div>
                    <div class ="col-md-12">
            <p>{this.props.instructions}></p>
            </div>

                    <br/>
                    </div>
                </div>
                 </div>
                <div className="row">
               <a className="btn btn-primary ml-1 mr-1" href={linkEdit}>Edit</a>

              <form  method="POST" action={formUrl}>
                <button type="submit" className="btn btn-primary btn-customized">Delete</button>
                </form>
        </div>
    </div>
</div>
</div>
 </DefaultLayout>
    );
  }
}

module.exports = recipePage;