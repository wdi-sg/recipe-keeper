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
                    <div className="alert alert-danger alert-dismissible fade show text-white" role="alert">
                      <strong>Please Read!</strong><br /> This page only allows you to edit basic information of the selected recipe. <br />You are not allowed to edit ingredients in this page.<br /> Please click on add ingredients button in order to add ingredients of your liking to this recipe.
                      <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <form method="POST" action={"/recipe/" + this.props.id + "?_method=PUT"}>
                    <h3>Edit ID {this.props.id} recipe: </h3><br />
                    Recipe Title:
                    <input type="text" className="form-control form-control-sm" name="name" minLength="5" required="required" pattern="[ a-zA-Z ]*$" defaultValue={this.props.name}/><br />
                    Recipe Ingredients:
                    {recipes}
                    Recipe Instructions:
                    <input type="text" className="form-control form-control-sm" name="ins" minLength="5" required="required" defaultValue={this.props.instructions}/><br /><br />
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