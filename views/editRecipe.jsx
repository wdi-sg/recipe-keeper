var React = require('react');
var DefaultLayout = require('./default');
console.log("Start rendering EDIT ");

class EditRecipe extends React.Component {
    render() {
        console.log(this.props + 'INFO HERE');
        return (
            <DefaultLayout title="RECIPE">
            
            <h3>Recipe Title:{this.props.title} </h3>
            
            {/* <h3>Recipe Instructions: {this.props.instructions}</h3>
            <h3>Recipe Ingredients:{this.props.ingredients}</h3> */}
            <form method="POST" action={'/recipes/'+this.props.id+ '?_method=PUT'}>
                <div>
                    Recipe Title: <input name="title" type="text" value={this.props.title}/>
                    Recipe Ingredients: <input name="ingredients" type="text" value={this.props.ingredients}/>
                    Recipe Instructions: <input name="instructions" type="text" value={this.props.instructions}/>
                    <input type="submit" value="Edit Recipe"/>

                </div>
                
            </form>
            </DefaultLayout>
            )};
    }


module.exports = EditRecipe;
