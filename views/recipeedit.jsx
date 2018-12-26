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

class Recipeedit extends React.Component{
    render(){
        const recipes = this.props.ingredients.map( recipe => {
            return <Recipeingredients list={recipe}></Recipeingredients>;
        });
        return(
            <DefaultLayout>
                <div>
                    <form method="POST" action={"/recipe/" + this.props.id + "?_method=PUT"}>
                    <h3>Edit ID {this.props.id} recipe: </h3><br />
                    Recipe Title:
                    <input type="text" name="name" minlength="5" pattern="[ a-zA-Z ]*$" value={this.props.name}/><br />
                    Recipe Ingredients:
                    {recipes}
                    Recipe Instructions:
                    <input type="text" name="ins" minlength="5" value={this.props.instructions}/><br /><br />
                    <input type="submit" value="Edit" /><br />
                    </form>
                    <br />
                    <br />
                    <form method="GET" action={"/recipe/" + this.props.id + "/ingredients"}>
                        <input type="submit" value="Add ingredients" />
                    </form>
                    <form method="GET" action="/recipe">
                        <input type="submit" value="Home" />
                    </form>
                </div>
            </DefaultLayout>
            );
    }
}

module.exports = Recipeedit;