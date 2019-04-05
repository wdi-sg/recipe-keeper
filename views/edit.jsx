var React = require('react');
var DefaultLayout = require('./layouts/default');

class Edit extends React.Component {
  render() {

    let formAttribute = `/recipes/${this.props.id}?_method=PUT`;

    return (
            <DefaultLayout title="Edit Existing Recipe">
                <form className="edit" class="edit form-group" method="POST" action={ formAttribute }>
                    Recipe Title: <input className="form-control" name="recipeTitle"/><br/>
                    Ingredients: <input className="form-control" name="ingredients"/><br/>
                    Instructions: <input className="form-control" name="instructions"/><br/>
                    <input className="btn btn-dark" type="submit" value="Edit this Recipe"/>
                </form>
            </DefaultLayout>
    );
  }
}

module.exports = Edit;