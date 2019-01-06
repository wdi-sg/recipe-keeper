var React = require('react');

class Index extends React.Component {

  render(props){

    	return (
    		<React.Fragment>
    			<html>
    				<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous" />
	                <body>
	                	<nav className="navbar navbar-expand-lg navbar-light bg-light">
						  <a className="navbar-brand" href="">RecipeMaker</a>
						  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
						    <span className="navbar-toggler-icon"></span>
						  </button>
						  <div className="collapse navbar-collapse" id="navbarSupportedContent">
						    <ul className="navbar-nav mr-auto">
						      <li className="nav-item active">
						        <a className="nav-link" href="">Home <span className="sr-only">(current)</span></a>
						      </li>
						       <li className="nav-item active">
						        <a className="nav-link" href="api/recipes/get/1">Recipe 1 <span className="sr-only">(current)</span></a>
						      </li>
						    </ul>
						  </div>
						</nav>
	                  <div>
		                <h1>Here are the list of recipes available</h1>
		                	{this.props.displayAll}
			            </div>
	                </body>
	              </html>
	         </React.Fragment>
	    );
	}  
}

module.exports = Index;

			                // {displayAll}