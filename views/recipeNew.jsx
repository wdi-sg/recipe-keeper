var React = require('react');

class recipeNew extends React.Component {

    render() {

        const sampleRecipe = Object.entries(this.props.sample).map( ([key, value]) => {
            return (
                <div>
                <label>{key}:</label>
                <br/>
                <input type='text' value={value} name={key}/>
                <br/>
                <br/>
                </div>
            )
        })


        return (
            <html>
                <head>
                    <link rel="stylesheet" type="text/css" href="/style.css"/>
                </head>
                <body>
                    <h1>Create a new recipe</h1>
                    <form method='POST' action='/recipes'>
                        {sampleRecipe}
                        <div className="button">
                            <button type="submit">Submit</button>
                        </div>
                    </form>
                </body>
            </html>
        )

    }

}

module.exports = recipeNew;