const React = require('react');

class RecipeFunction extends React.Component{
    render(){
        let value1 = this.props.key1;
        let ingredients = value1.ingredient.map(i=>{
            return <li>{i}</li>
        })
        return(
            <div>
                <h5><a href={"http://localhost:3000/GC/edit/"+value1.name}>{value1.name}</a></h5>
            </div>
        )
    }
}


class RecipeList extends React.Component{
    render(){
        let recipeObj = this.props.recipeObj;

        let recipeP = recipeObj.map(value1 =>{
            return <RecipeFunction key1={value1}/>
        })

        return(
            <html>
                <head>
                    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossOrigin="anonymous"/>

                </head>
                <body>
                    <h1>List of all recipes</h1>
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