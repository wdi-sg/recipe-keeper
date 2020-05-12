var React = require('react');
var DefaultLayout = require('./layouts/default');
class New extends React.Component {
  render() {
    return (

          <DefaultLayout pageTitle={this.props.pageTitle}>



                  { this.props.warning }
            <form method="POST" action={ this.props.postType }>
             <br/>
                <div className="form-group">
                  <label htmlFor="exampleFormControlInput1">Recipe Title:</label>
                  <input type="text" className="form-control" id="exampleFormControlInput1" name="recipeTitle" value={this.props.recipeTitle}/>
                </div>
                  <br/>
                <div className="form-group">
                  <label htmlFor="exampleFormControlTextarea1">Ingredients:</label>
                  <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" name="ingredients" value={this.props.ingredients}>
                  </textarea>
                </div>
                  <br/>
                <div className="form-group">
                  <label htmlFor="exampleFormControlTextarea1">Instructions</label>
                  <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" name="instructions" value={this.props.instructions}>
                  </textarea>
                </div>
                  <br/>
                  <input type="submit"  className="btn btn-primary mb-2" value="Submit"/>
            </form>
          </DefaultLayout>
    );
  }
}

module.exports = New;