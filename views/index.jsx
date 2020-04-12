var React = require('react');

//"https://www.worldofwallpaper.com/media/catalog/product/d/e/dec191-marblesque-marble-wallpaper-white-ea.jpg"
import ResponsiveEmbed from 'react-bootstrap/ResponsiveEmbed'


class Home extends React.Component {

    render() {
        //insert javascript code here

        //console.log(this.props)
        let recipeList = this.props.recipes.map ((element,index) => {
        return (
            <div>
                <form method="get" action={"/recipes/"+element.title} >
                    <button type="submit" className="btn btn-light btn-block border">
                    {index+1}. {element.title}</button>
                </form>
            </div>
            )
        })
        return (
            <html>
                <meta charset="UTF-8"/>
                <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet"/>
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"/>
                <link rel="stylesheet" type="text/css" href="css/style.css"/>
                <body style={{
                              backgroundImage: "url(" + "https://s3.amazonaws.com/mk-website-media/wp-content/uploads/2018/10/19000104/Wallpaper-Kemra-Marble-1-1100x1318.jpg" + ")",
                              backgroundPosition: 'center',
                              backgroundSize: 'cover',
                              backgroundRepeat: 'repeat'
                            }}>
                    <div className="container">
                        <div className="row border d-flex justify-content-center">
                            <h1><u>My Recipes~</u></h1>
                        </div>
                        <div className="row flex-column my-2">
                            <form method="get" action="/recipes/create">
                                <button type="submit" className="btn btn-secondary btn-block">Create Recipe</button>
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