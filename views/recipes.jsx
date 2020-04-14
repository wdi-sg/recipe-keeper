var React = require('react');

class Recipes extends React.Component {

    render() {

        const obj = this.props.recipes;
        console.log(typeof (obj));
        console.log(Array.isArray(obj));

        var myArrLength = obj.length;
        console.log(myArrLength);

        let recipeList = obj.map(recipe => {
            return (
                <li>{recipe.title}
                    <ul><li>Ingredients: <br />{recipe.ingredients}</li>
                        <li>Instructions: <br />{recipe.instructions}</li>
                    </ul></li>)
        });

        return (
            <div>
                <h1>Recipe List</h1>
                <ol>
                    {recipeList}
                </ol>
            </div>
        );
    }
};

module.exports = Recipes;