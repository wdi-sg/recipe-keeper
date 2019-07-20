var React = require('react');
var Layout = require('./layout.jsx');

class CreateForm extends React.Component {
  render() {
    return (
        <Layout>
            <form method="POST" name="create" action="/recipes">
                <input type="text" name="title" placeholder="enter title"/><br />
                <input type="text" name="ingredients" placeholder="enter ingredients, eg. meat fish rice"/><br />
                <input type="text" name="instructions" placeholder="enter instructions for preparation"/><br />
                <input type="submit" value="Submit"/>
            </form>
        </Layout>
    );
  }
}



module.exports = CreateForm;