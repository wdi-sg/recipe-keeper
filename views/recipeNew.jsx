var React = require('react');

class recipeNew extends React.Component {

    render() {

        const sampleRecipe = Object.entries(this.props.sample).map( ([key, value]) => {
            return (
                <div>
                    <label>{key}:</label>
                    <br/>
                    <input type='text' name={key} className={key}/> <br/><span className="example">Example: {value}</span>
                    <br/>
                    <br/>
                </div>
            )
        })


        return (
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
                    <h2>Fill up the form below to contribute a new recipe</h2>
                    <form method='POST' action='/recipes'>
                        {sampleRecipe}
                        <input type="submit" value="Submit" class="button"/>
                    </form>
                </body>
            </html>
        )

    }

}

module.exports = recipeNew;