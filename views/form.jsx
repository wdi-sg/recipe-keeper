const React = require('react');
class Form extends React.Component {
    render() {

        return (
            <html>
            <head>
            </head>
                <body>
                    <form method='POST' action='/recipes'>
                        <h1>New Recipe</h1>
                        <h3>Title</h3>
                        <input type='text' name='title'/>
                        <h3>Ingredients</h3>
                        <input type='text' name='ingredients'/><br/>
                        <h3>Instructions</h3>
                        <input type='text' name='instructions'/><br/>
                        <input type="submit" name="Submit"/>
                    </form>
                </body>
            </html>
        );
    }
}

module.exports = Form;