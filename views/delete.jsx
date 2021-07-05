var React = require('react');

class Delete extends React.Component {

    render() {

        let deleteAction = `/recipes/${this.props.id}?_method=delete`;

        return (

        <body>
            <h1>Delete Recipe:</h1>
                <div>
                    <div>Recipe Title:
                        <p>{this.props.recipeTitle}</p>
                    </div>
                    <div>Ingredients:
                        <p>{this.props.ingredients}</p>
                    </div>
                    <div>Instructions:
                        <p>{this.props.instructions}</p>
                    </div>
                </div>
            <form method="POST" action={deleteAction}>
                <input type="submit" value="Delete"/>
            </form>
        </body>

        );
    }
}

module.exports = Delete;