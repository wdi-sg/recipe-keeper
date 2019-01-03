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
                    <header>
                        <h1>House of Cooks</h1>
                    </header>
                    <nav>
                        <a href='/recipes/' className="home">RECIPES</a>
                        <a href='/ingredients' className="ingredients">INGREDIENTS</a>
                        <a href='/recipes/new' className="create">CONTRIBUTE</a>
                    </nav>
                    <div className="gparent">
                        <div classname="row">
                            <div className="column">
                                <h4>{this.props.Title}</h4>
                            </div>
                        </div>
                        <div classname="row">
                            <div className="columnleft">
                                <img src ={this.props.Image} className ="selectedImage"/>
                            </div>
                            <div className="columnright">
                                <div className="parent">
                                    <h3>Ingredients</h3>
                                    <p>{this.props.Ingredients}</p>
                                </div>
                                <div className="parent">
                                    <h3>Instructions</h3>
                                    <p>{this.props.Instructions}</p>
                                </div>
                            </div>
                        </div>
                        <div className="action clearfix ">
                            <a href={'/recipes/' + this.props.Id + '/edit'} className = "edit">
                                <input type="submit" value="Edit" class="button"/>
                            </a>
                            <form method='POST' action={'/recipes/'+ this.props.id+ '?_method=delete'}>
                                <input type="submit" value="Delete" class="button"/>
                            </form>
                        </div>
                    </div>
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

module.exports = recipeSelected;