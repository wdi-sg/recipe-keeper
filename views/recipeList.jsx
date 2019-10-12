const React = require('react');

class RecipeFunction extends React.Component{
    render(){
        let value1 = this.props.key1;
        let ingredients = value1.ingredient.map(i=>{
            return <li>{i}</li>
        })
        return(
            <div>
                <h5>Name: {value1.name}</h5>
                <h5>Type: {value1.type}</h5>
                <h5>Ingredients: <ul>{ingredients}</ul></h5>
                <h5>Instruction: {value1.instruction}</h5>
            </div>
        )
    }
}


class RecipeList extends React.Component{
    render(){
        let recipeObj = this.props.recipeObj;
        let path = this.props.path;
        console.log("Current Path: ", path);
        let recipeP

        if(path === "type"){
            recipeP = this.props.recipeObj.sort((a,b)=> a.type < b.type ? 1: -1);
            recipeP = recipeP.map(value1 =>{
                return <RecipeFunction key1={value1}/>
            })
        } else if(path === "name"){
            recipeP = this.props.recipeObj.sort((a,b)=> a.name > b.name ? 1: -1);
            recipeP = recipeP.map(value1 =>{
                return <RecipeFunction key1={value1}/>
            })
        } else {
            recipeP = recipeObj.map(value1 =>{
                return <RecipeFunction key1={value1}/>
            })
        }

        return(
            <html>
                <head>
                    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossOrigin="anonymous"/>

                </head>
                <body>
                    <h1>List of all recipes</h1>
                    <form method="GET" action="/GC/AllRecipe/sortBy">
                        <select name="path">
                            <option value="name">Name</option>
                            <option value="type">Type</option>
                        </select>
                        <input type="submit"/>
                    </form>
                    {/* Redirect you to All Recipe link */}
                    <div>
                        {recipeP}
                    </div>
                </body>
            </html>
        )
    }
}

module.exports = RecipeList;