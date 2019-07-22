var React = require('react');
// var DefaultLayout = require('./layouts/default');

class addForm extends React.Component {
    render() {
        return (
            <html>
                <div className="row">
                    <div>
                        <h1>New recipe to add?</h1>
                    </div>
                    <div>
                        <form method="POST" action="../recipes">
                            <div>Recipe Name: <input name="recipeName"></input></div>
                            <div>Ingredients required: <input name="ingredients"></input></div>
                            <div>Instructions: <input name="instructions"></input></div>
                            <div><button type="submit">Submit</button></div>
                        </form>
                    </div>
                </div>
            </html>
        );
    }
}

module.exports = addForm;