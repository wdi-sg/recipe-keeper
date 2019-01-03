var React = require('react');

class recipeEdit extends React.Component {

    render() {
    const editRecipe = Object.entries(this.props.edit).map ( ([key, value]) => {
        return (
            <div>
                <label>{key}:</label>
                <br/>
                <input type='test' name={key} value={value}/>
                <br/>
                <br/>
            </div>
            )
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
                    <h4>Edit recipe</h4>
                    <form method='POST' action={'/recipes/'+ this.props.id+ '?_method=PUT'}>
                    {editRecipe}
                    <input type="submit" value="Submit" class="button"/>
                    </form>
                    <footer class="clearfix">
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

module.exports = recipeEdit;