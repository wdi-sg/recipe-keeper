var React = require('react');


class Home extends React.Component {

    render() {

    return (
        <html>
            <meta charset="UTF-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet"/>
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"/>
            <link rel="stylesheet" type="text/css" href="./style.css"/>
            <body style={{
                              backgroundImage: "url(" + "https://s3.amazonaws.com/mk-website-media/wp-content/uploads/2018/10/19000104/Wallpaper-Kemra-Marble-1-1100x1318.jpg" + ")",
                              backgroundPosition: 'center',
                              backgroundSize: 'cover',
                              backgroundRepeat: 'repeat'
                            }}>
                <div className="container border d-flex flex-column rounded bg-light mt-5">
                        <div style={{color:"#797979"}}>
                            <h1><u>Title</u></h1>
                        </div>
                        <div className ="border my-2 p-1">
                            {this.props.title}
                        </div>
                        <div style={{color:"#797979"}}>
                            <h1><u>Ingredients</u></h1>
                        </div>
                        <div  className ="border my-2 p-1">
                            {this.props.ing}
                        </div>
                        <div style={{color:"#797979"}}>
                            <h1><u>Instructions</u></h1>
                        </div>
                        <div  className ="border my-2 p-1">
                            {this.props.inst}
                        </div>
                        <div className="row">
                            <form method="get" action="/recipes">
                                <button type="submit" className="btn btn-secondary m-2">Back to List</button>
                            </form>
                            <form method="get" action={"/recipes/"+this.props.title+"/edit"}>
                                <button type="submit" className="btn btn-secondary m-2">
                                    Edit Recipe</button>
                            </form>
                            <form method="POST" action={"/recipes/"+this.props.title+"?_method=delete"}>
                                <button type="submit" className="btn btn-secondary m-2">
                                    Delete Recipe</button>
                            </form>

                        </div>
                    </div>

            </body>
        </html>
    );
  }
}

module.exports = Home;