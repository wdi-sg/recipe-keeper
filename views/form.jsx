var React = require('react');
const Layout = require('./layout.jsx');

class Form extends React.Component {
  render() {
    return (
        <Layout>
            <div>
                <h1>Create a recipe!</h1>
                <form method="POST" action="/recipes">
                    <p>Recipe Title</p>
                    <input name="title"/>
                    <p>Image</p>
                    <input name="img"/>
                    <p>Ingredients</p>
                    <input name="ingredients"/>
                    <p>Instructions</p>
                    <input name="instructions"/>
                    <p>--</p>
                    <input type="submit"/>
                </form>
            </div>
        </Layout>
    );
  }
}

module.exports = Form;