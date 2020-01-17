
var React = require('react');
var DefaultLayout = require('./layouts/default');

class recipePage extends React.Component {
  render() {
     let linkDelete= "/recipes/"+this.props.id+"/delete";
     let linkEdit= "/recipes/"+this.props.id+"/edit";

     console.log(this.props.id);
    return (
      <DefaultLayout title="Recipe">
                  <a className="btn btn-primary ml-1 mr-1 mt-1" href="/recipes">Home</a>
<div className="container h-100">
    <div className="row h-100 justify-content-center align-items-center">
        <div className="col-10 col-md-8 col-lg-6">
                <h1>{this.props.title}</h1>
                <div className="container h-100">
                    <label >Ingredients : {this.props.ingredients}</label>
                    <br/>
                    <label >Instructions : {this.props.instructions}</label>
                    <br/>
                </div>
               <a className="btn btn-primary ml-1 mr-1" href={linkEdit}>Edit</a>
                <a className="btn btn-primary mr-1" href={linkDelete}>Delete</a>
        </div>
    </div>
</div>
 </DefaultLayout>
    );
  }
}

module.exports = recipePage;