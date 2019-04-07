var React = require('react');
var DefaultLayout = require('./layouts/default');

class Add extends React.Component {
  render() {

    return (
            <DefaultLayout title="Add a New Recipe">
                <form className="add" action="/recipes" method="POST">
                    <div>Recipe Title:</div>
                    <input className="form-control" name="title"/>
                    <br/>

                    <div className="ingredients">
                        Ingredients:<div className="btn btn-info moreIngredientButton">+ Add more Ingredient</div>
                        <div className="row">
                            <div className="col">
                                Name: <input className="form-control" name="ingredients[0][name]"/>
                            </div>
                            <div className="col">
                                Amount: <input type="number" className="form-control" name="ingredients[0][amount]"/>
                            </div>
                            <div className="col">
                                Notes: <input className="form-control" name="ingredients[0][notes]"/>
                            </div>
                        </div>
                    </div>
                    <br/>

                    <div>Instructions:</div>
                    <textarea className="form-control" name="instructions" rows="3"/>
                    <br/>

                    <input className="btn btn-secondary" type="submit" value="Add new Recipe"/>
                </form>
            </DefaultLayout>
    );
  }
}

module.exports = Add;