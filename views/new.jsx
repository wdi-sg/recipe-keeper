var React = require('react');

class New extends React.Component {

    render() {

        return (
            <body>
            <h1>Create a new recipe:</h1>
                <form method="POST" action="/recipes">
                Recipe Title: <input name="recipeTitle" type="text" placeholder="Boiled Chicken"/><br/>
                Ingredients: <br/>
                <textarea name="ingredients" cols="40" rows="10" placeholder="1 chicken, 10 ml water..."></textarea><br/>
                Instructions: <br/>
                <textarea name="instructions" cols="40" rows="10" placeholder="Place chicken in water with salt. Simmer for 20 minutes."></textarea><br/>
                <input type="submit" value="Submit"/>
            </form>
        </body>
        );
    }
}

module.exports = New;