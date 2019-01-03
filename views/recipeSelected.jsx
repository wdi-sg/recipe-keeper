var React = require('react');

class recipeSelected extends React.Component {

    render() {

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
                    <div className="gparent">
                        <h2>{this.props.Title}</h2>
                        <img src ={this.props.Image}/>
                        <div className="parent">
                            <h3>Ingredients</h3>
                            <p>{this.props.Ingredients}</p>
                        </div>
                        <div className="parent">
                            <h3>Instructions</h3>
                            <p>{this.props.Instructions}</p>
                        </div>
                        <p className="dates">created on {this.props.CreateDate}</p>
                        <p  className="dates">last edited on {this.props.EditDate}</p>
                        <div className="links">
                            <a href={'/recipes/' + this.props.Id + '/edit'} className = "edit">edit</a>
                            <a href='/recipes/' className = "home">home</a>
                        </div>
                        <div className="delete">
                            <form method='POST' action={'/recipes/'+ this.props.id+ '?_method=delete'}>
                                <input type="submit" value="Delete" class="button"/>
                            </form>
                        </div>
                    </div>
                </body>
            </html>
        )

    }

}

module.exports = recipeSelected;