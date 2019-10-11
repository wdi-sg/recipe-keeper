var React = require('react');

class New extends React.Component {
    render() {
        return (
            <html>
                <body>
                    <h2>Add New Recipe</h2>

                    <form method="POST" action="/recipes/new">
                        Recipe Title:<br/>
                        <input type="text" name="title" required/><br/>
                        Ingredients:<br/>
                        <input type="text" name="ingredients1"/><br/>
                        <input type="text" name="ingredients2"/><br/>
                        <input type="text" name="ingredients3"/><br/>
                        Instructions:<br/>
                        <input type="text" name="instructions" required/><br/>
                        <input type="submit" value="Submit"/>
                    </form>
                </body>
            </html>
            );
    }
}

module.exports = New;