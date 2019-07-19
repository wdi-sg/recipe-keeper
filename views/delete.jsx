var React = require('react');
var DefaultLayout = require('./layouts/default');


class Delete extends React.Component {
  render() {
    let item = this.props.item
    let url = '/recipes/'+this.props.id+"?_method=delete"
    return (
      <DefaultLayout title={this.props.title}>
        <form method="POST" action={url}>
            <table>
                <tr>
                    <td>Title</td>
                    <td><input name="title" type="text" value={this.props.item.title}/></td>
                </tr>
                <tr>
                    <td>Utensils</td>
                    <td><input name="utensils" type="text" value={this.props.item.utensils}/></td>
                </tr>
                <tr>
                    <td>Seasonings</td>
                    <td><input name="seasonings" type="text" value={this.props.item.seasonings}/></td>
                </tr>
                <tr>
                    <td>Ingredients</td>
                    <td><input name="ingredients" type="text" value={this.props.item.ingredients}/></td>
                </tr>
            </table>
            <input type="submit" value="Submit"/>
        </form>

      </DefaultLayout>
    );
  }
}

module.exports = Delete;