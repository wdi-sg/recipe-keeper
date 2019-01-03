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
                    <h1>House of Cooks</h1>
                    <h2>Edit recipe</h2>
                    <form method='POST' action={'/recipes/'+ this.props.id+ '?_method=PUT'}>
                    {editRecipe}
                    <input type="submit" value="Submit" class="button"/>
                    </form>
                </body>
            </html>
            )
    }
}

module.exports = recipeEdit;