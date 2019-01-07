
var React = require ('react');

class newRecipe extends React.Component {
    render() {
        return (
                <form className="new-recipe" action="/recipes" method="POST">
                    <div>
                        <h5>recipe title:</h5>
                        <input name="title"/>
                    </div>
                    <div>
                        <h5>ingredients:</h5>
                        <textarea className="new-input" name="ingredients"></textarea>
                    </div>
                    <div>
                        <h5>instructions:</h5>
                        <textarea className="new-input" name="instructions"></textarea>
                    </div>
                    <div>
                        <button type="submit"> Add New Recipe </button>
                    </div>
                </form>
        )
    }
}

module.exports = newRecipe;