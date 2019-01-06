var React = require('react');

class Home extends React.Component {

    render() {

        return(

            <html>

            <head>
            </head>

            <body>
                <header>
                <h1>Create a recipe:</h1>
                </header>

                <form method="POST" action="/recipes/">
                <p>Recipe Title:</p><input name="title"/><br />
                <p>Ingredients:</p><input name="ingredients"/><br />
                <p>Instructions:</p><textarea name="instructions" rows="10" cols="30"></textarea><br />
                <input type="submit" value="submit"/>
                </form>

            </body>
            </html>

        )
    }

}

module.exports = Home;