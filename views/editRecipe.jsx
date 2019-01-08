var React = require('react');
var DefaultLayout = require('./recipecss');

class editRecipe extends React.Component {

  render(props){

    	return (
    		<DefaultLayout>
                <React.Fragment>
    			  <h1>This is the recipe you want to edit:</h1>
                    <div className="form-group col-6 ">
                        <form action={"/api/recipes/updated/"+this.props.id} method="post">
                          <input id="title" type="text" name="title" className="form-control mb-1" placeholder={this.props.title} />
                          <input id="ingredients" type="text" className="form-control mb-1" name="ingredients" placeholder={this.props.ingredients} />
                          <input id="instructions" type="text" className="form-control mb-1" name="instructions" placeholder={this.props.instructions} />
                          <input type="submit" />
                        </form>
                    </div>
                </React.Fragment>
	         </DefaultLayout>
	    );
	}
}

module.exports = editRecipe;