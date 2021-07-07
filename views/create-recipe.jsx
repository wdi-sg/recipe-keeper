var React = require ('react');
var DefaultLayout = require ('./default');

class CreateRecipe extends React.Component {
    render() {
        return (
            <DefaultLayout>
            <div className="row justify-content-center">
                <form className = "new-recipe-form" action = "/recipes" method = "post">
                    <div className ="new-recipe-container">
                        <label className="col-12">recipe title:</label>
                        <input className= "new-input" type= "text" name= "title"/>
                    </div>
                    <div className = "new-recipe-container">
                        <label className="col-12">preparation level:</label>
                            <input className = "new-input" type="radio" name="prep" value="easy"/> easy
                            <input className = "new-input" type="radio" name="prep" value="medium"/> medium
                            <input className = "new-input" type="radio" name="prep" value="hard"/> hard
                    </div>
                    <div className = "new-recipe-container">
                        <label className="col-12">cook time:</label>
                        <input className = "new-input" type = "text" name = "cook"/> mins
                    </div>
                    <div className = "new-recipe-container">
                        <label className="col-12">ready to serve in:</label>
                        <input className = "new-input" type = "text" name = "ready"/> mins
                    </div>
                    <div className = "new-recipe-container">
                        <label className="col-12">ingredients:</label>
                        <textarea className = "col-12 ingredients-txt-area" name = "ingredients"></textarea>
                    </div>
                    <div className = "new-recipe-container">
                        <label className="col-12">instructions:</label>
                        <textarea className = "col-12 instructions-txt-area" name = "instructions"></textarea>
                    </div>
                    <div className="new-recipe-container">
                        <button type="submit button" className="btn btn-sm btn-outline-secondary">save recipe</button>
                    </div>
                </form>
            </div>
            </DefaultLayout>
        )
    }
}

module.exports = CreateRecipe;