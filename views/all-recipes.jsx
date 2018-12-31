var React = require ('react');
var DefaultLayout = require ('./default');

class AllRecipes extends React.Component {
    render(){
        const eachRecipe = this.props.all.map ((recipe,index)=>{
            return <div key={index}>
                        <h3> Title: {recipe.Title} </h3>
                        <h3> Ingredients: </h3>
                        <p> {recipe.ingredients} </p>
                        <h3> Instructions: </h3>
                        <p> {recipe.instructions} </p>
                   </div>
        })
        return(
            <DefaultLayout>
                <h2> Home (All Recipes) </h2>
                {eachRecipe}
            </DefaultLayout>
        )
    }
}

module.exports = AllRecipes;