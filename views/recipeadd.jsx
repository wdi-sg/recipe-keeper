var React = require('react');
var DefaultLayout = require('./recipecss');

class Recipeadd extends React.Component{
    render(){
        return(
            <DefaultLayout>
                <div>
                    <h3>Create a new recipe </h3>
                    <br />
                    Recipe Id: {this.props.id}
                    <br />
                    Recipe Title: {this.props.name}
                    <br />
                    Recipe Ingredients: {this.props.ingredients}
                    <br />
                    Recipe Instructions: {this.props.instructions}
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

module.exports = Recipeadd;