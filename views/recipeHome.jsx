var React = require('react');

class recipeHome extends React.Component {

    render() {
        const recipesAll = this.props.recipes;
        const recipesAllHTML = recipesAll.map(recipe => {
            return <div className="eachRecipeContainer">
                        <h2>{recipe.Title}</h2>
                        <img src={recipe.Image}/>
                        <div className="links">
                            <a href={'/recipes/' + recipe.Id} className = "viewOrDelete">view/delete</a>
                            <a href={'/recipes/' + recipe.Id + '/edit'} className = "edit">edit</a>
                        </div>
                    </div>
        })


        return(
           <html>
                <head>
                    <meta charset="utf-8"/>
                     <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
                    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css" integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS" crossorigin="anonymous"/>
                    <link href='https://fonts.googleapis.com/css?family=Londrina+Shadow' rel='stylesheet' type='text/css'/>
                    <link rel="stylesheet" type="text/css" href="/style.css"/>
                </head>
                <body>
                    <h1>House of Cooks</h1>
                    <a href='/recipes/new' className="create">Contribute a new recipe</a>
                    <div className="all">
                        {recipesAllHTML}
                    </div>
                </body>
            </html>

            )
    }
}

module.exports = recipeHome;