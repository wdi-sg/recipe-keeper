var React = require('react');

class Recipedelete extends React.Component{
    render(){
        return(
            <div>
                <h3>Successfully deleted recipe, take a look at the details that have been deleted </h3>
                Recipe ID: <span> </span>
                {this.props.id}
                <br />
                Recipe Title: <span> </span>
                {this.props.name}
                <br />
                Ingredients: <span> </span>
                {this.props.ingredients}
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

module.exports = Recipedelete;