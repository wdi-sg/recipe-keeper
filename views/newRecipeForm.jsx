var React = require('react');

class newRecipeForm extends React.Component {
    render() {
        return (
            <html>
                <body>
                    <div>
                        <h1>New Recipe Form</h1>
                        <form method = "POST" action = "/recipes">
                            <p>Title</p>
                            <input name = "Title"/>
                            <p>Ingredients</p>
                            <input name = "Ingredients"/>
                            <p>Instructions</p>
                            <input name = "Instructions"/>
                            <p></p>
                            <input type = "submit"/>
                        </form>
                    </div>
                </body>
            </html>
        )
    }
};

module.exports = newRecipeForm;