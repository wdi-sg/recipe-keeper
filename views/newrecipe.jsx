var React = require('react');

class Newrecipe extends React.Component {
    render() {
        return (
            <body>
                <form method="POST" action="/recipes">
                TITLE: <input type="text" name="title"/>
                <br/>
                INGREDIENTS: <input type="text" name="ingredients"/>
                <br/>
                INSTRUCTIONS: <input type="text" name="instructions"/>
                <br/>
                <input type="submit" value="Submit"/>
                </form>
            </body>
           )
    }
}


module.exports = Newrecipe;