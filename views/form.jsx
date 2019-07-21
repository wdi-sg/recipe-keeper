var React = require('react');
var DefaultLayout = require('./layouts/default');

class Form extends React.Component{
    render(){
        return(
            <DefaultLayout>
            <html>
            <body>
            <h1>Recipe form</h1>
            <form method="POST" action="../recipes">
             <p>Dish title:</p><input name="title"/>
             <p>Ingredients:</p><input name="ingredients"/>
             <p>Instructions:</p><input name="instructions"/>
             <input type="submit"/>
             </form>
             </body>
             </html>
             </DefaultLayout>
            )
    }
}

module.exports = Form;