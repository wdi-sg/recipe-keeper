var React = require('react');

class Edit extends React.Component {
    render(){
        const actionLink = `/recipes/${this.props.id}?_method=PUT`
        return (
            <div>
                <h1>Edit Recipe</h1>
                <form action={actionLink} method="POST">
                    Title: <input type="text" name="title" value={this.props.title}/><br/>
                    Ingredients: <input type="text" name="ingredients" value={this.props.ingredients}/><br/>
                    Instructions: <input type="text" name="instructions" value={this.props.instructions}/><br/>
                    <button>Edit</button>
                </form>
            </div>
        );
    }
}

module.exports = Edit;