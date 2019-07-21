var React = require('react');
const Layout = require('./layout.jsx');

class editForm extends React.Component {
    render() {
        return (
            <Layout>
            <div>
        <html>
        <body>
          <div>
            <h1>Edit a Recipe</h1>
            <div class="formlist">
            <form method="POST" action={"/cookbook/" + this.props.index + "?_method=PUT"} >
                <p>Name of dish</p>
                <input name="title" defaultValue={this.props.title}/>
                 <p>Dish ID</p>
                <input name="id" defaultValue={this.props.id}/>
                <p>Image URL</p>
                <input name="img" defaultValue={this.props.img}/>
                <p>Ingredients</p>
                <input name="ingredients"  id="space" defaultValue={this.props.ingredients}/>
                <p>Instructions</p>
                <input name="instructions"  id="space" defaultValue={this.props.instructions}/>
                <br /> <br />
                <input type="submit" value="Edit" id="sub"/>
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

module.exports = editForm;