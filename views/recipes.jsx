var React = require('react');

class Recipes extends React.Component {

    render() {
        console.log(this.props.recipes.length);
        console.log(this.props.recipes[0]);
        console.log(this.props.recipes[0].title);
        var myArrLength = this.props.recipes.length;
        var recipeList = () => {
            var index;
            for (index = 0; index < myArrLength; index++) {
                return <li>{this.props.recipes[index].title}</li> +
                    <ul> +
                        <li>Ingredients: <br />{this.props.recipes[index].ingredients}</li>+
                        <li>Instructions: <br />{this.props.recipes[index].instructions}</li>+
                    </ul>
            }
        }
        console.log(recipeList);




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