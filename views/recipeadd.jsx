var React = require('react');

class Recipeadd extends React.Component{
    render(){
        return(
            <div>
            <h3>Create a new recipe </h3><br />
                Recipe Id: {this.props.id}
                <br />
                Recipe Title: {this.props.name}
                <br />
                <br />
                <form method="GET" action="/recipe">
                    <input type="submit" value="Home" />
                </form>
            </div>
            );
    }
}

module.exports = Recipeadd;