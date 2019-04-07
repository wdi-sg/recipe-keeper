var React = require('react');
var DefaultLayout = require('./layouts/default');

class Edit extends React.Component {
  render() {

    let formActionAttribute = `/recipes/${this.props.recipe.id}?_method=PUT`;

    return (
            <DefaultLayout title= { `Edit Recipe - ${ this.props.title }` }>
                <form className="edit" className="edit form-group" method="POST" action={ formActionAttribute }>
                    <div>Recipe Title:</div>
                    <input className="form-control" name="title" value= { this.props.recipe.title }/>
                    <br/>

                    <div>Ingredients:</div>
                    <textarea className="form-control" name="ingredients" value= { this.props.recipe.ingredients }/>
                    <br/>

                    <div>Instructions:</div>
                    <textarea className="form-control" name="instructions" value= { this.props.recipe.instructions }/>
                    <br/>

                    <input className="btn btn-secondary" type="submit" value="Edit this Recipe"/>
                    <a href= { `/recipes/${this.props.recipe.id}` } className="btn btn-info">Back</a>
                </form>


            </DefaultLayout>
    );
  }
}

module.exports = Edit;