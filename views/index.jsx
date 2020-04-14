var React = require('react');

//"https://www.worldofwallpaper.com/media/catalog/product/d/e/dec191-marblesque-marble-wallpaper-white-ea.jpg"
import ResponsiveEmbed from 'react-bootstrap/ResponsiveEmbed'

class Home extends React.Component {

    render() {

        let recipeList = this.props.recipes.map ((element,index) => {
        return (
            <div>
                <form method="get" action={"/recipes/"+element.title} >
                    <button type="submit" className="btn btn-light btn-block border" style={{borderRadius:"20px"}}>
                    {index+1}. {element.title}</button>
                </form>
            </div>
            )
        })
        return (
            <html>
                <head>
                <meta charset="UTF-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet"/>
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"/>
                <link rel="stylesheet" type="text/css" href="style.css"/>
                <style>
                </style>
                </head>
                <body style={{
                              backgroundImage: "url(" + "https://s3.amazonaws.com/mk-website-media/wp-content/uploads/2018/10/19000104/Wallpaper-Kemra-Marble-1-1100x1318.jpg" + ")",
                              backgroundPosition: 'center',
                              backgroundSize: 'cover',
                              backgroundRepeat: 'repeat'
                            }}>
                    <div className="container">
                        <div className="header row border d-flex justify-content-center mt-5" style={{backgroundColor:"rgba(255,255,255,0.4)",borderRadius:"20px"}}>
                            <h1><u>My Recipes~</u></h1>
                        </div>
                        <div className="row flex-column my-2">
                            <form method="get" action="/recipes/new">
                                <button type="submit" className="btn btn-secondary btn-block" style={{borderRadius:"20px"}}>Create Recipe</button>
                            </form>
                        </div>
                        <div className="row flex-column">
                                {recipeList}
                        </div>
                        </div>

                </body>
            </html>
        );
    }
}

module.exports = Home;