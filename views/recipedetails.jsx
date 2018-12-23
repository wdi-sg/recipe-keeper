var React = require('react');

class Recipedetails extends React.Component{
    render(){
        return(
            <div>
                <h3>Recipe Title: {this.props.name}</h3>
                <br />
                ID: <span> </span>
                {this.props.id}
                <br />
                Ingredients: <span> </span>
                {this.props.ingredients}
                <br />
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

module.exports = Recipedetails;