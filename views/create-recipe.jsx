var React = require ('react');
var DefaultLayout = require ('./default');

class CreateRecipe extends React.Component {
    render() {
        return (
            <DefaultLayout>
                <form className="new-recipe" action="/recipes" method="post">
                    <div>
                        <label>recipe title:</label>
                        <input className="new-input" type="text" name="title"/>
                    </div>
                    <div>
                        <label>ingredients:</label>
                        <textarea className="new-input" name="ingredients"></textarea>
                    </div>
                    <div>
                        <label>instructions:</label>
                        <textarea className="new-input" name="instructions"></textarea>
                    </div>
                    <div>
                        <button type="submit"> Save Recipe </button>
                    </div>
                </form>
            </DefaultLayout>
        )
    }
}

module.exports = CreateRecipe;