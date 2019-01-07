const React = require('react');
const LayoutContainer = require('./layout.jsx');

class App extends React.Component {
    render() {
        console.log(this.props)
        const recipes = this.props.recipes.map(recipe => {
            return(
                <div>
                    id : {recipe.id}<br/>
                    name : {recipe.name}<br/>
                    ingredients : {recipe.ingredients}<br/>
                    instructions : {recipe.instructions}<br/>
                </div>
            )
        })
        return(
            <LayoutContainer>
                <div>
                    <h1>RECIPES</h1>
                    <form method="POST" action="/recipes">
                        <fieldset>
                            <legend>new recipes</legend>
                            <label>NAME</label> <br/>
                            <input type="text" name="name"></input> <br/>
                            <label>ingredients</label> <br/>
                            <input type="text" name="ingredient"></input> <br/>
                            <label>instructions</label> <br/>
                            <input type="text" name="instructions"></input> <br/>
                            <input type="submit" value="submit"></input> <br/>
                        </fieldset>
                    </form>
                    { recipes }
                </div>
            </LayoutContainer>
        )
    }
}

module.exports = App;