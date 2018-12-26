var React = require('react');
var DefaultLayout = require('./recipecss');

class Ingredientslist extends React.Component{
    render(){
        return(
            <div>
                <ul>
                    -{this.props.list.name}<span> </span>
                    {this.props.list.amount}<span> </span>
                    {this.props.list.notes}<span> </span>
                </ul>
                <br />
            </div>
            );
    }
}

class Recipeingredients extends React.Component{
    render(){
        return(
            <div>
                <ul>
                Recipe Title: <span> </span>
                {this.props.list.name}
                <br />
                ID: <span> </span>
                {this.props.list.id}
                <br />
                Ingredients:<span> </span>
                <br />
                <br />
                {this.props.list.ingredients.map( ing => {
                    return <Ingredientslist list={ing}></Ingredientslist>;
                    })}
                <br />
                Instructions: <span> </span>
                {this.props.list.instructions}
                <br />
                Date created: <span> </span>
                {this.props.list.date_created}
                <br />
                Date edited: <span> </span>
                {this.props.list.date_edited}
                <br />
                </ul>
            </div>
            );
    }
}

class Recipedetails extends React.Component{
    render(){
        const recipes = this.props.list.map( recipe => {
            return <Recipeingredients list={recipe}></Recipeingredients>;
        });
        return(
            <DefaultLayout>
                <div>
                    <h3>Recipes with {this.props.input} ingredients</h3>
                    {recipes}
                    <br />
                    <form method="GET" action="/recipe/ingredients">
                        <input type="submit" value="ingredients" />
                    </form>
                    <form method="GET" action="/recipe">
                        <input type="submit" value="Home" />
                    </form>
                </div>
            </DefaultLayout>
            );
    }
}

module.exports = Ingredientslist;
module.exports = Recipeingredients;
module.exports = Recipedetails;