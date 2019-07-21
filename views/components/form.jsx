var React = require('react');

class Form extends React.Component {
  render() {

    return (
        <form method={this.props.method} action={this.props.action}>
            <table>
                <tr>
                    <td>Title</td>
                    <td><input name="title" type="text" value={this.props.title}/></td>
                </tr>
                <tr>
                    <td>Utensils</td>
                    <td><input name="utensils" type="text" value={this.props.utensils}/></td>
                </tr>
                <tr>
                    <td>Seasonings</td>
                    <td><input name="seasonings" type="text" value={this.props.seasonings}/></td>
                </tr>
                <tr>
                    <td>Ingredients</td>
                    <td><input name="ingredients" type="text" value={this.props.ingredients}/></td>
                </tr>
            </table>
            <input type="submit" value="Submit"/>
        </form>
    );
  }
}

module.exports = Form;