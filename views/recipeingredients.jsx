var React = require('react');
var DefaultLayout = require('./recipecss');

class Recipeingredients extends React.Component{
    render(){
        return(
            <div>
                <ul>
                    -{this.props.list.name}<span> </span>
                    {this.props.list.amount}<span> </span>
                    {this.props.list.notes}<span> </span>
                </ul>
            </div>
            );
    }
}

class Recipedetails extends React.Component{
    render(){
        const recipes = this.props.ingredients.map( recipe => {
            return <Recipeingredients list={recipe}></Recipeingredients>;
        });
        return(
            <DefaultLayout>
                <div>
                <div className="alert alert-danger alert-dismissible fade show text-white" role="alert">
                  <strong>Please Read!</strong><br /> You are only allowed to add 1 ingredient at a time as this is to prevent abuse.<br />If by any chance you have forgetton what recipe you are editting please click the edit recipe button.
                  <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                    Ingredients:<span> </span>
                    {recipes}
                    <form method="POST" action={"/recipe/" + this.props.id}>
                        <select name="ingredients">
                            <option value="ing1">chicken, 1, de-boned</option>
                            <option value="ing2">water, 1, isotonic</option>
                            <option value="ing3">duck, 1, de-boned</option>
                            <option value="ing4">butter, 1, cup</option>
                            <option value="ing5">brown sugar, 3, cup</option>
                            <option value="ing6">eggs, 2</option>
                            <option value="ing7">vanilla extract, 1, teaspoon</option>
                            <option value="ing8">flour, 2, cup</option>
                        </select>
                    <input type="submit" value="Add ingredient" />
                    </form>
                    <br />
                    <br />
                    <form method="GET" action={"/recipe/" + this.props.id + "/edit"}>
                            <input type="submit" value="Edit recipe" />
                        </form>
                    <form method="GET" action="/recipe">
                        <input type="submit" value="Home" />
                    </form>
                </div>
            </DefaultLayout>
            );
    }
}

module.exports = Recipeingredients;
module.exports = Recipedetails;