var React = require('react');

class Home extends React.Component {
    render() {



    const allRecipes = this.props.recipes.recipes.map( (recipes, index) => {
        return (
            <li>{recipes.title}</li>
        )
    })
    const Navbar = require('./navbar.jsx');

        return (
            <html>
            <head>
                  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"/>
                        <link rel="stylesheet" type="text/css" href="style.css"/>
            </head>
                <body>
                <Navbar/>
                    <h1>Welcome to the Recipe Keeper</h1>
                        <h2>All Recipes</h2>
                            <ul>
                            {allRecipes}
                            </ul>
                </body>
            </html>
        )
    }
}

module.exports = Home;