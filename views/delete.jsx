var React = require('react');
var DefaultLayout = require('./layouts/default');


class Delete extends React.Component {
  render() {
    let item = this.props.item
    let url = '/recipes/'+this.props.id+"?_method=delete"
    return (
      <DefaultLayout title={this.props.title}>
        <form method="POST" action={url}>
            <table className="table table-bordered table-edit">
                <tr>
                    <td>Title</td>
                    <td><input name="title" type="text" value={this.props.item.title} readOnly style={{backgroundColor:"grey"}}/></td>
                </tr>
                <tr>
                    <td>Utensils</td>
                    <td><input name="utensils" type="text" value={this.props.item.utensils} readOnly style={{backgroundColor:"grey"}}/></td>
                </tr>
                <tr>
                    <td>Seasonings</td>
                    <td><input name="seasonings" type="text" value={this.props.item.seasonings} readOnly style={{backgroundColor:"grey"}}/></td>
                </tr>
                <tr>
                    <td>Ingredients</td>
                    <td><input name="ingredients" type="text" value={this.props.item.ingredients} readOnly style={{backgroundColor:"grey"}}/></td>
                </tr>
            </table>
            <input type="submit" value="Delete"/>
        </form>

      </DefaultLayout>
    );
  }
}

module.exports = Delete;