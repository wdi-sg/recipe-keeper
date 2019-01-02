var React = require('react');

class recipeHome extends React.Component {

    render() {
        const recipesAll = this.props.recipes;
        const recipesAllHTML = recipesAll.map(recipe => {
            return <div className="individual">
                        <h2>{recipe.Title}</h2>
                        <img src={recipe.Image}/>
                        <a href={'/recipes/' + recipe.Id} className = "view">view</a>
                        <a href={'/recipes/' + recipe.Id + '/edit'} className = "edit">edit</a>
                        <a href={'/recipes/'+ recipe.Id} className = "delete">delete</a>
                    </div>
        })


        return(
           <html>
                <head>
                    <link rel="stylesheet" type="text/css" href="/style.css"/>
                </head>
                <body>
                    <h1>House of Cooks</h1>
                    <a href='/recipes/new' className="create">Create a recipe</a>
                    <div className="all">
                        {recipesAllHTML}
                    </div>
                </body>
            </html>

            )
    }
}

module.exports = recipeHome;