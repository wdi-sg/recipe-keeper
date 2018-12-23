var React = require('react');

class Recipedetails extends React.Component{
    render(){
        return(
            <div>
                <h3>Recipe Title: {this.props.name}</h3>
                <br />
                Ingredients: <span> </span>
                {this.props.ingredients}
                <br />
                <br />
                Instructions: <span> </span>
                {this.props.instructions}
                <br />
                <br />
                <form method="GET" action="/recipe">
                    <input type="submit" value="Home" />
                </form>
            </div>
            );
    }
}

module.exports = Recipedetails;