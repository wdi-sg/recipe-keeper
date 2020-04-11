var React = require('react');

class Form extends React.Component {
  render() {
    return (
        <html>
            <body>
                <h1>Online Recipe Keeper!</h1>
                <div>
                    <form method ="POST" action = '/recipes'>
                        <p>Title</p>
                        <input type = "text" name = "name" placeholder = "enter name of recipe"/>
                        <p>Ingredients</p>
                        <input type = "text" name = "ingredients" placeholder = "enter ingredients"/>
                        <p>Instructions</p>
                        <input type = "text" name = "instructions" placeholder = "enter instructions"/>
                        <br/><br/>
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </body>
        </html>
        );
    }
}
module.exports = Form;