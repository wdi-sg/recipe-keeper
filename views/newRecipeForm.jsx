// create new step 3: create new recipe form
var React = require('react');

// create new step 4: allow user to input details for new recipe
class NewRecipeForm extends React.Component {
    render() {
        return (
            <html>
                <body>
                    <div>
                        <h1>New Recipe Form</h1>
                        {/*create new step 5: submit button post method and action to recipe for app.post*/}
                        <form method = "POST" action = "/recipes">
                            <p>title</p>
                            <input name = "title"/>
                            <p>ingredients</p>
                            <input name = "ingredients"/>
                            <p>instructions</p>
                            <input name = "instructions"/>
                            <p>=============================</p>
                            <input type = "submit"/>
                        </form>
                    </div>
                </body>
            </html>
        )
    }
};

module.exports = NewRecipeForm;