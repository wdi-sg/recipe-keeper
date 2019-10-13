var React = require('react');

class Edit extends React.Component {
    render() {
        let formAction = '/recipes/' + this.props.id + '?_method=put';


        return (
            <Layout>
                <h1>Edit Recipe</h1>
                    <form method="POST" action={formAction}>
                        ID: <input type="text" name="id" value={this.props.id} readOnly/><br/>
                        Title: <input type="text" name="title" value={this.props.title} required/><br/>
                        Ingredients: <input type="text" name="ingredients" value={this.props.ingredients} required/><br/>
                        Instructions: <input type="text" name="instructions" value={this.props.instructions} required/><br/>
                        <input type="submit" value="Submit"/>
                    </form>
            </Layout>
        )
    }
}

module.exports = Edit;