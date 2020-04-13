var React = require('react');

class Form extends React.Component {
  render() {
    return (
        <html>
        <head>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous"/>
       </head>
            <body style={{backgroundColor: 'gray', 'text-align': 'center', color: 'purple'}}>
                <h1>Online Recipe Keeper!</h1>
                <div>
                    <form method ="POST" action = '/recipes'>
                        <p>Title</p>
                        <input type = "text" name = "name" placeholder = "enter name of recipe"/><br/><br/>
                        <p>Ingredients</p>
                        <input type = "text" name = "ingredients" placeholder = "enter ingredients"/><br/><br/>
                        <p>Instructions</p>
                        <input type = "text" name = "instructions" placeholder = "enter instructions"/>
                        <br/><br/>
                        <button style={{padding: '10px'}} type="submit">Submit</button>
                    </form>
                </div>
            </body>
        </html>
        );
    }
}
module.exports = Form;