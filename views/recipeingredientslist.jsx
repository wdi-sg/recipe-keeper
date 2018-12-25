var React = require('react');

class Recipeingredients extends React.Component{
    render(){
        return(
            <div>
                <ul>
                    <form method="GET" action={"/recipe/" + this.props.list.name + "/recipelist"}>
                        -{this.props.list.name}<span> </span>
                        {this.props.list.amount}<span> </span>
                        {this.props.list.notes}<span> </span>
                        <input type="submit" value="Recipe"/>
                    </form>
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
                <h3>Click on any ingredients to check which recipe uses them</h3>
                Ingredients:<span> </span>
                {recipes}
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