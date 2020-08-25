const React = require("React");

class Form extends React.Component {
    render() {

        return (
            <div>
                <form method="POST" action="/recipes">
                    Recipe Title: <input type="text" name="title"/>
                    <br/>
                    Ingredients: <input type="text" name="ingredients"/>
                    <br/>
                    Instructions: <input type="text" name="instructions"/>
                    <br/>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}

module.exports = Form;