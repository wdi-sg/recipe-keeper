var React = require('react');

class RecipeForm extends React.Component {
  render() {

        if(this.props.recipes === undefined){
            return (
                <div>
                    <div className={"form-group"}>
                        <label for={"recipeTitle"}>Recipe Title</label>
                        <input type={"text"} className={"form-control"} id={"recipeTitle"} placeholder={"Recipe Title"} name={'recipeTitle'} />
                    </div>
                    <div className={"form-group"}>
                        <label for={"recipeImage"}>Image URL</label>
                        <input className={"form-control"} id={"recipeImage"} placeholder={"Image URL"} name={'recipeImage'} />
                    </div>
                    <div className={"form-group"}>
                        <label for={"cookTime"}>Cook Time</label>
                        <input type={'number'} min={'0'} className={"form-control"} id={"cookTime"} placeholder={'Cook Time'} name={'cookTime'} />
                    </div>
                    <div className={"form-group"}>
                        <label for={"recipeIngredients"}>Ingredients</label>
                        <textarea className={"form-control"} id={"recipeIngredients"} placeholder={"Ingredients"} rows={'4'} name={'recipeIngredients'}></textarea>
                    </div>
                    <div className={"form-group"}>
                        <label for={"recipeInstructions"}>Instructions</label>
                        <textarea className={"form-control"} id={"recipeInstructions"} placeholder={'Instructions'} rows={'4'} name={'recipeInstructions'}></textarea>
                    </div>
                    <button type="submit" class="btn btn-dark">{this.props.submitText}</button>
                </div>
            );
        } else {
            return (
                <div>
                    <div className={"form-group"}>
                        <label for={"recipeTitle"}>Recipe Title</label>
                        <input type={"text"} className={"form-control"} id={"recipeTitle"} placeholder={"Recipe Title"} name={'recipeTitle'} defaultValue={this.props.recipes.title}/>
                    </div>
                    <div className={"form-group"}>
                        <label for={"recipeImage"}>Image URL</label>
                        <input className={"form-control"} id={"recipeImage"} placeholder={"Image URL"} name={'recipeImage'} defaultValue={this.props.recipes.img} />
                    </div>
                    <div className={"form-group"}>
                        <label for={"cookTime"}>Cook Time</label>
                        <input type={'number'} min={'0'} className={"form-control"} id={"cookTime"} placeholder={'Cook Time'} name={'cookTime'} defaultValue={this.props.recipes.cookTime}  />
                    </div>
                    <div className={"form-group"}>
                        <label for={"recipeIngredients"}>Ingredients</label>
                        <textarea className={"form-control"} id={"recipeIngredients"} placeholder={"Ingredients"} rows={'4'} name={'recipeIngredients'} defaultValue={this.props.recipes.ingredients}></textarea>
                    </div>
                    <div className={"form-group"}>
                        <label for={"recipeInstructions"}>Instructions</label>
                        <textarea className={"form-control"} id={"recipeInstructions"} placeholder={'Instructions'} rows={'4'} name={'recipeInstructions'} defaultValue={this.props.recipes.instructions}></textarea>
                    </div>
                    <button type="submit" class="btn btn-dark">{this.props.submitText}</button>
                </div>
            );

        }
    }
}

module.exports = RecipeForm;