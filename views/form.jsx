var React = require('react');

const Layout = require('./layout.jsx');


class Form extends React.Component {
    render() {
        return (
            <Layout>
            <div>
        <html>
        <head>

        </head>
        <body>
          <div>
            <h1 class= "enter">Enter a new recipe</h1>
            <div class="formlist">
            <form method="POST" action="/cookbook">
                <p>Name of dish</p>
                <input name="title" placeholder ="please type in name"/>
                 <p>Dish ID</p>
                <input name="id" placeholder ="please type in number"/>
                <p>Image URL</p>
                <input name="img" placeholder ="please insert img url"/>
                <p>Ingredients</p>
                <input name="ingredients"  id="space"/>
                <p>Instructions</p>
                <input name="instructions"  id="space"/>
                <br /> <br />
                <input type="submit" id="sub"/>
            </form>
            </div>
          </div>
        </body>
        </html>
        </div>
        </Layout>
        );
    }
}

module.exports = Form;