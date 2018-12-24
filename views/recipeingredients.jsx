var React = require('react');

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
            <div>
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
                <form method="GET" action={"/recipe/" + this.props.id + "/edit"}>
                        <input type="submit" value="Edit recipe" />
                    </form>
                <form method="GET" action="/recipe">
                    <input type="submit" value="Home" />
                </form>
            </div>
            );
    }
}

module.exports = Recipeingredients;
module.exports = Recipedetails;