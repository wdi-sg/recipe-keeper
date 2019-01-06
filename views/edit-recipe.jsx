var React = require ('React');
var DefaultLayout = require ('./default');

class EditRecipe extends  React.Component {
    render(){

        const editRecipe = this.props.edit;
        const actionPath = `/recipes/${editRecipe.num}?_method=PUT`;
        return(
            <DefaultLayout>
                <div className="row justify-content-center">
                    <form className="edit-recipe-form" action={actionPath} method="post">
                        <h2> edit recipe </h2>
                        <div className="edit-recipe-container">
                            <label className="col-12">recipe title:</label>
                            <input className="edit-input" type="text" name="title" defaultValue={editRecipe.title}/>
                        </div>

                        <div className="edit-recipe-container">
                            <label className="col-12">preparation level:</label>
                            <input type="radio" className="new-input" name="prep" value="easy"/> easy
                            <input type="radio" className="new-input" name="prep" value="medium"/> medium
                            <input type="radio" className="new-input" name="prep" value="hard"/> hard
                        </div>

                        <div className="edit-recipe-container">
                            <label className="col-12">cook time:</label>
                            <input className="edit-input" type="text" name="title" defaultValue={editRecipe.cook}/>mins
                        </div>

                        <div className="edit-recipe-container">
                            <label className="col-12">ready to serve in:</label>
                            <input className="edit-input" type="text" name="title" defaultValue={editRecipe.ready}/>mins
                        </div>

                        <div className="edit-recipe-container">
                            <label className="col-12">ingredients:</label>
                            <textarea className="col-12 ingredients-txt-area" name="ingredients" defaultValue={editRecipe.ingredients}></textarea>
                        </div>

                        <div className="edit-recipe-container">
                            <label className="col-12">instructions:</label>
                            <textarea className="col-12 instructions-txt-area" name="instructions" defaultValue={editRecipe.instructions}></textarea>
                        </div>
                        <div className="edit-recipe-container">
                            <button type="submit button" className="btn btn-sm btn-outline-secondary">save recipe</button>
                        </div>
                    </form>
                </div>
            </DefaultLayout>
        )
    }
}

module.exports = EditRecipe;



