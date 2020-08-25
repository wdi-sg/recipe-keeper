const React = require('React');

class Form extends React.Component {
    render () {

        return (
            <form method = "POST" action = "/recipes">
                Recipe Title: <input type="text" name = "title"/>
                <br/>
                Recipe Ingredients: <input type="text" name = "ingredients"/>
                <br/>
                Recipe Instructions: <input type="text" name = "instructions"/>
                <br/>
                <input type = "submit" value = "submit"/>
            </form>
        )
    }
}

module.exports = Form;