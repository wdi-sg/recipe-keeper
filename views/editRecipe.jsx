var React = require('react');
var DefaultLayout = require('./default');
console.log("Start rendering EDIT ");

class EditRecipe extends React.Component {
    render() {
        // let date= new Date();
        // let newDate = date.toString();
        // newDate.replace("GMT+0800 Singapore Standard Time","");
        // this.props.recipes["date created"] = newDate;

        console.log(this.props + 'INFO HERE');
        return (
            <DefaultLayout title="RECIPE">
            <h3>Editing a Recipe</h3>
            <h4>Recipe Title:{this.props.title} </h4>
            

            <form method="POST" action={'/recipes/'+this.props.id+ '?_method=PUT'}>
                <div>
                    Recipe Title: <input name="title" type="text" value={this.props.title}/>
                    Recipe Ingredients: <input name="ingredients" type="text" value={this.props.ingredients}/>
                    Recipe Instructions: <input name="instructions" type="text" value={this.props.instructions}/>
                    <input type="text" name="date created" value={this.props["date created"]} style={{display: "none"}}/>
                    <input type="submit" value="Edit Recipe"/>

                </div>
                
            </form>
            </DefaultLayout>
            )};
    }


module.exports = EditRecipe;
