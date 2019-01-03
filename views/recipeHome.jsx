var React = require('react');

class recipeHome extends React.Component {

    render() {
        const recipesAll = this.props.recipes;
        const recipesAllHTML = recipesAll.map(recipe => {
            return  <div className="eachRecipeContainer">
                        <a href={'/recipes/' + recipe.Id}>
                            <img src={recipe.Image} />
                            <h2>{recipe.Title}</h2>
                        </a>
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
                    <header>
                        <h1>House of Cooks</h1>
                    </header>
                    <nav>
                        <a href='/recipes/' className="home">RECIPES</a>
                        <a href='/ingredients' className="ingredients">INGREDIENTS</a>
                        <a href='/recipes/new' className="create">CONTRIBUTE</a>
                    </nav>
                    <div className="all">
                        {recipesAllHTML}
                    </div>
                    <footer>
                        <a href='/recipes/' className="home">RECIPES</a>
                        <a href='/ingredients' className="home">INGREDIENTS</a>
                        <a href='/recipes/new' className="create">CONTRIBUTE</a>
                        <a href='' className="contact">CONTACT</a>
                        <p>©2019 HOUSEOFCOOKS.COM.SG ALL RIGHTS RESERVED.</p>
                    </footer>
                </body>
            </html>

            )
    }
}

module.exports = recipeHome;