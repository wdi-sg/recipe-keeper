const React = require('react');

class Recipe extends React.Component {
    render(){
        const actionLink = `/recipes/${this.props.id}?_method=DELETE`;
        return(
            <div>
                <h1>Title: {this.props.title}</h1>
                <p>Ingredients: {this.props.ingredients}</p>
                <p>Instructions: {this.props.instructions}</p>
                <form action={actionLink} method="POST">
                    <button>Delete this Recipe</button>
                </form>
            </div>
        );
    }
}

module.exports = Recipe;