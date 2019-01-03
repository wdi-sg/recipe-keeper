var React = require('react');

class recipeSelected extends React.Component {

    render() {

        return(
            <html>
                <head>
                    <link rel="stylesheet" type="text/css" href="/style.css"/>
                </head>
                <body>
                    <h1>{this.props.Title}</h1>
                    <img src ={this.props.Image}/>
                    <div className="parent">
                        <h2>Ingredients</h2>
                        <p>{this.props.Ingredients}</p>
                    </div>
                    <div className="parent">
                        <h2>Instructions</h2>
                        <p>{this.props.Instructions}</p>
                    </div>
                    <p>created on {this.props.CreateDate}</p>
                    <p>last edited on {this.props.EditDate}</p>
                    <div className="nav">
                        <a href={'/recipes/' + this.props.Id + '/edit'} className = "edit"></a>
                        <div className="delete">
                            <form method='POST' action={'/recipes/'+ this.props.id+ '?_method=delete'}>
                            <input type="submit" value="Delete"/>
                            </form>
                        </div>
                        <a href='/recipes/' className = "home">back to list of recipes</a>
                    </div>
                </body>
            </html>
        )

    }

}

module.exports = recipeSelected;