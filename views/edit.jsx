var React = require('react');
class Home extends React.Component {
    render() {
        console.log(this.props.title)
        return (
            <html>
                <meta charset="UTF-8"/>
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
                        <form method="POST" action={"/recipes/"+this.props.title+"?_method=put"}>
                            <div className="text-center">
                                <h1><b>Enter New Recipe</b></h1>
                            </div>
                            <div style={{color:"#797979"}}>
                                <h1><u>Title</u></h1>
                            </div>
                            <div className ="border my-2 p-1">
                                <input className="form-control" name="title" type="text" value={this.props.title}/>
                            </div><div style={{color:"#797979"}}>
                                <h1><u>Ingredients</u></h1>
                            </div>
                            <div className ="border my-2 p-1">
                                <input className="form-control" name="ing" type="text" value={this.props.ing} style={{height:"5rem"}}/>
                            </div><div style={{color:"#797979"}}>
                                <h1><u>Instruction</u></h1>
                            </div>
                            <div className ="border my-2 p-1">
                                <input className="form-control" name="inst" type="text" value={this.props.inst} style={{height:"10rem"}}/>
                            </div>
                            <input className="btn btn-secondary mb-2" type="submit" value="Submit"/>
                        </form>
                    </div>
                </body>
            </html>
        );
    }
}

module.exports = Home;