var React = require('react');

class ViewSingleRecipe extends React.Component {
    render() {
        return (
            <html>
                <body>
                    <div>
                        <form method="GET" action={"/recipes" + this.props.id}>
                            <h1>View Recipe: {this.props.id} </h1>
                            <br />
                            ID: <input type="text" name="id" value={this.props.id} readOnly />
                            <br />
                            Recipe Title: <input type="text" name="title" value={this.props.title} readOnly />
                            <br />
                            Ingredients: <input type="text" name="ingredients" value={this.props.ingredients} readOnly />
                            <br />
                            Instructions: <input type="text" name="instructions" value={this.props.instructions} readOnly />
                        </form>
                    </div>
                </body>
            </html>
            );
    }
}

module.exports = ViewSingleRecipe;