var React = require('react');
var Layout = require('./layout.jsx');

class EditForm extends React.Component {
  render() {
    return (
        <Layout>
            <form method="POST" name="create" action={"/recipes/edit/"+this.props.id+"?_method=PUT"}>
                <input type="text" name="id" placeholder={"ID :"+this.props.id} readonly="readonly"/><br />
                <input type="text" name="title" placeholder={this.props.title}/><br />
                <input type="text" name="ingredients" placeholder={this.props.ingredients}/><br />
                <input type="text" name="instructions" placeholder={this.props.instructions}/><br />
                <input type="submit" value="Submit"/>
            </form>
        </Layout>
    );
  }
}



module.exports = EditForm;