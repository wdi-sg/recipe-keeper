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
                    <link rel="stylesheet" type="text/css" href="/style.css"/>
                </head>
                <body>
                    <h1>Edit recipe</h1>
                    <form method='POST' action={'/recipes/'+ this.props.id+ '?_method=PUT'}>
                    {editRecipe}
                    <div className="button">
                        <button type="submit">Submit</button>
                    </div>
                    </form>
                </body>
            </html>
            )
    }
}

module.exports = recipeEdit;