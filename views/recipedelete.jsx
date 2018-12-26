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

class Recipedelete extends React.Component{
    render(){
        const recipes = this.props.ingredients.map( recipe => {
            return <Recipeingredients list={recipe}></Recipeingredients>;
        });
        return(
            <DefaultLayout>
                <div>
                    <h3>Successfully deleted recipe, take a look at the details that have been deleted </h3>
                    Recipe ID: <span> </span>
                    {this.props.id}
                    <br />
                    Recipe Title: <span> </span>
                    {this.props.name}
                    <br />
                    Ingredients: <span> </span>
                    {recipes}
                    <br />
                    Instructions: <span> </span>
                    {this.props.instructions}
                    <br />
                    <br />
                    <form method="GET" action="/recipe">
                        <input type="submit" value="Home" />
                    </form>
                </div>
            </DefaultLayout>
            );
    }
}

module.exports = Recipedelete;