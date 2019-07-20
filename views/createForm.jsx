var React = require('react');
var Layout = require('./layout.jsx');

class CreateForm extends React.Component {
  render() {
    return (
        <Layout>
            <form method="POST" name="create" action="/recipes">
                <input type="text" name="title" placeholder="enter title"/>
                <input type="submit" value="Submit"/>
            </form>
        </Layout>
    );
  }
}



module.exports = CreateForm;