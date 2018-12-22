var React = require('react');
// var AllFood = require('allFood');

class MainPage extends React.Component{
    render(){
        // const allFoods = //TODO: do all the  

        return(
            <html>
                <head>
                    <meta charSet="UTF-8"/>
                    <link href="https://fonts.googleapis.com/css?family=Indie+Flower|Lobster|Pacifico" rel="stylesheet"></link>
                    <link rel="stylesheet" type="text/css" href="style.css"/>
                </head>
                <body>
                    <header>
                        <h1>Unleash Your Bake-ini Figure</h1>
                    </header>
                    <section>
                        <nav>
                            <a href="#"><div className="navs">Home</div></a>
                            <a href="#"><div className="navs">All Recipes</div></a>
                            <a href="#"><div className="navs">Add New Recipe</div></a>
                            
                        </nav>
                        <main>
                            <p>oioioioi</p>
                        </main>
                    </section>
                </body>
            </html>
        );
    }
}

module.exports = MainPage;

