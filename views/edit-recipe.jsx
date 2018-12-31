var React = require ('React');
var DefaultLayout = require ('./default');

class EditRecipe extends  React.Component {
    render(){

        const editRecipe = this.props.edit;

        const actionPath = `/recipes/${editRecipe.num}?_method=PUT`;
        return(
            <DefaultLayout>
                <h2> edit recipe page </h2>
                    <form className="edit-recipe" action={actionPath} method="post">
                    <div>
                        <label>recipe title:</label>
                        <input className="edit-input" type="text" name="title" defaultValue={editRecipe.title}/>
                    </div>
                    <div>
                        <label>ingredients:</label>
                        <textarea className="edit-input" name="ingredients" defaultValue={editRecipe.ingredients}></textarea>
                    </div>
                    <div>
                        <label>instructions:</label>
                        <textarea className="edit-input" name="instructions" defaultValue={editRecipe.instructions}></textarea>
                    </div>
                    <div>
                        <button type="submit"> Update Recipe </button>
                    </div>
                </form>
            </DefaultLayout>
        )
    }
}

module.exports = EditRecipe;