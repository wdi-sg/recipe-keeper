var React = require('react');

class Form extends React.Component {
  render() {

    return (
        <form method={this.props.method} action={this.props.action}>
            <table className="table table-bordered table-edit">
                <tr>
                    <th scopre="row">Title</th>
                    <td><input name="title" type="text" value={this.props.title}/></td>
                </tr>
                <tr>
                    <th scopre="row">Utensils</th>
                    <td><input name="utensils" type="text" value={this.props.utensils}/></td>
                </tr>
                <tr>
                    <th scopre="row">Seasonings</th>
                    <td><input name="seasonings" type="text" value={this.props.seasonings}/></td>
                </tr>
                <tr>
                    <th scopre="row">Ingredients</th>
                    <td><input name="ingredients" type="text" value={this.props.ingredients}/></td>
                </tr>
            </table>
            <input type="submit" value="Submit"/>
        </form>
    );
  }
}

module.exports = Form;