var React = require('react');
var DefaultLayout = require('./layouts/default');

class Delete extends React.Component {
  render() {

    let formAttribute = `/recipes/${this.props.id}?_method=DELETE`;

    return (
            <DefaultLayout title="Delete Existing Recipe">
                <form className="delete" method="POST" action={ formAttribute }>
                    Recipe Title: <label> { this.props.name } </label><br/>
                    Ingredients: <label> { this.props.height } </label><br/>
                    Instructions: <label> { this.props.weight } </label><br/>
                    <input type="hidden" name="id" value= { this.props.id } /><br/>
                    <input className="btn btn-danger" type="submit" value="Do you really want to delete this Recipe?"/>
                </form>
            </DefaultLayout>
    );
  }
}

module.exports = Delete;