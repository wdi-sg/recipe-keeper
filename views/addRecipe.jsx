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
                        <form method="POST" action="/recipes/newrecipes">
                            <div className="text-center">
                                <h1><b>Enter New Recipe</b></h1>
                            </div>
                            <div style={{color:"#797979"}}>
                                <h1><u>Title</u></h1>
                            </div>
                            <div className ="border my-2 p-1">
                                <input type="text" name="title"/><br/>
                            </div><div style={{color:"#797979"}}>
                                <h1><u>Ingredients</u></h1>
                            </div>
                            <div className ="border my-2 p-1">
                                <input type="text" name="ing"/><br/>
                            </div><div style={{color:"#797979"}}>
                                <h1><u>Instruction</u></h1>
                            </div>
                            <div className ="border my-2 p-1">
                                <input type="text" name="inst"/><br/>
                            </div>
                                <input className="btn btn-sm btn-secondary m-2" type="submit" value="Submit"/>
                        </form>


                    </div>
                </body>
            </html>
        );
    }
}

module.exports = Home;