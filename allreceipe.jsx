var React = require('react');
var DefaultLayout = require('./layouts/default');

class Recipe extends React.Component {

  render() {
    var recipeId = this.prop.id.map(itemId => {
        return <li>{itemId}</li>
    });
    var recipeName = this.prop.name.map(itemName =>{
        return <li>{itemName}</li>
    });

    return (
        <html>
            <head>
                <link rel="stylesheet" href="style.css"/>
            </head>
            <body>
            <div className="containerOfBox">
            <ul>
            {recipeId}
            {recipeName}
            </ul>
            </div>
            </body>
        </html>
        )}}