var React = require('react');

class DeleteRecipeConfirmation extends React.Component {
    render() {

        return (
            <html>
                <body>
                    <div>
                            <h3>Recipe no.: {this.props.id} has been deleted.</h3>
                    </div>
                </body>
            </html>
            );
    }
}

module.exports = DeleteRecipeConfirmation;