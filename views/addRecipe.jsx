var React = require('react');
var DefaultLayout = require('./default');
var IngredientsList = require('./ingredients');
var listObj = require('../ingredient.json');
console.log("Start rendering ");


class AddRecipe extends React.Component {
    render() {
        let date= new Date();
        let newDate = date.toString();
        newDate.replace("GMT+0800 Singapore Standard Time","");
        console.log(newDate);

        // let itemslist = listObj.map(item => {
        //     return (
        //         <li>{item.name} </li>
        //     );
        // })

        // let itemslist = [];
        // itemslist.push(listObj);

        return(
            <DefaultLayout title="Add RECIPE" recipeLength={this.props.recipes.length}>
                <h2> Adding New Recipe</h2>
                <form method="POST" action="/recipes/">
                    Recipe ID: <input type="text" name="id" value={this.props.recipes.length+1} /><br /><br />
                    Recipe Name: <input type="text" name="title"/><br /><br />
                    Ingredients Required: <input type="text" name="ingredients"/><br /><br />
                    
                    Instructions: <input type="" name="instructions"/><br /><br />

                    <div class="dropdown">
                        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Ingredient List
                        </button>
                        {/* <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
                            <button class="dropdown-item" type="button"><IngredientsList ingredients={listObj}></IngredientsList></button>
                        </div> */}
                    </div>
                    <input type="" name="date created" value={newDate} style={{display: "none"}}/>
                    <input type="submit" value="Add Recipe"/>
                </form>
            </DefaultLayout>
            );
    }
}

module.exports = AddRecipe;
