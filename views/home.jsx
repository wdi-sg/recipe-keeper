const React = require('react');

class Home extends React.Component{
    render(){
        return(
            <html>
                <head>
                </head>
                <body>
                    <h1>Welcome to General Culinary</h1>
                    {/* Redirect you to All Recipe link */}
                    <form method="GET" action="/GC/AllRecipe">
                        <p>
                            To see all our recipes:
                            <input type="submit" value="Recipes"/>
                        </p>
                    </form>
                    <form method="GET" action="/GC/add">
                        <p>
                            To add new recipes:
                            <input type="submit" value="Add new Recipe"/>
                        </p>
                    </form>
                    <form method="GET" action="/GC/edit">
                        <p>
                            To edit our recipes:
                            <input type="submit" value="Edit Recipe"/>
                        </p>
                    </form>
                    <p>Home page returned!</p>
                </body>
            </html>
        )
    }
}

module.exports = Home;