var React = require('react');

class EditRecipe extends React.Component {
    render() {

        return (
            <html>
                <body>
                    <div>
                        <form action={"/recipes/" + this.props.id + "?_method=put"} method="POST">
                            <h3>You are editing recipe no.: {this.props.id} </h3>
                            <br />
                                ID: <input type="text" name="id" value={this.props.id} readOnly />
                                <br />
                                Recipe Title: <input type="text" name="title" value={this.props.title} />
                                <br />
                                Ingredients: <input type="text" name="ingredients" value={this.props.ingredients} />
                                <br />
                                Instructions: <input type="text" name="instructions" value={this.props.instructions} />
                                <br />
                                <input type="submit" value="Submit" />
                        </form>
                    </div>
                </body>
            </html>
            );
    }
}

module.exports = EditRecipe;