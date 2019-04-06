var React = require('react');

class New extends React.Component {

    render() {

        return (
            <body>
            <h1>Create a new recipe:</h1>
                <form method="POST" action="/recipes">
                Recipe Title: <input name="recipe_title" type="text" placeholder="Boiled Chicken"/><br/>
                Ingredients: <br/>
                <input name="ingredients" type="text" placeholder="1 chicken"/><br/>
                Instructions: <input name="instructions" type="text" placeholder="Place chicken in water with salt. Simmer for 20 minutes."/><br/>
                <input type="submit" value="Submit"/>
            </form>
        </body>
        );
    }
}

module.exports = New;