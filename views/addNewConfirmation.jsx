var React = require('react');

class AddNewConfirmation extends React.Component {
    render() {

        return (
            <html>
                <body>
                    <div>
                        <h3>Your recipe has been added successfully. </h3>
                        <br />
                            ID: <input type="text" name="id" value={this.props.id} readOnly />
                            <br />
                            Recipe Title: <input type="text" name="title" value={this.props.title} readOnly/>
                            <br />
                            Ingredients: <input type="text" name="ingredients" value={this.props.ingredients} readOnly/>
                            <br />
                            Instructions: <input type="text" name="instructions" value={this.props.instructions} readOnly/>
                    </div>
                </body>
            </html>
            );
    }
}

module.exports = AddNewConfirmation;