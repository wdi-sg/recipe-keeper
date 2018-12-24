var React = require('react');

class Recipeingredients extends React.Component{
    render(){
        return(
            <div>
                <ul>
                    - {this.props.list.name}<span> </span>
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
                <h3>Recipe Title: {this.props.name}</h3>
                <br />
                ID: <span> </span>
                {this.props.id}
                <br />
                Ingredients:<span> </span>
                {recipes}
                Instructions: <span> </span>
                {this.props.instructions}
                <br />
                Date created: <span> </span>
                {this.props.date_created}
                <br />
                Date edited: <span> </span>
                {this.props.date_edited}
                <br />
                <br />
                <form method="GET" action="/recipe">
                    <input type="submit" value="Home" />
                </form>
            </div>
            );
    }
}

module.exports = Recipeingredients;
module.exports = Recipedetails;