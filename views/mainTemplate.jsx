var React = require('react');

class MainPage extends React.Component{
    render(){
        // const allFoods = //TODO: do all the  

        return(
            <html>
                <head>
                    <meta charSet="UTF-8"/>
                    <link href="https://fonts.googleapis.com/css?family=Indie+Flower|Lobster|Pacifico|Gochi+Hand" rel="stylesheet"></link>
                    <link rel="stylesheet" type="text/css" href="/style.css"/>
                    <title>{this.props.title}</title>
                </head>
                <body>
                    <header>
                        <h1>Unleash Your Bake-ini Figure</h1>
                    </header>
                    <section>
                        <nav>
                            <a href="/recipes"><div className="navs">Home</div></a>
                            <a href="/recipes/new"><div className="navs">Add New Recipe</div></a>
                            
                        </nav>
                        <main>
                            {this.props.children}
                        </main>
                    </section>
                </body>
            </html>
        );
    }
}

module.exports = MainPage;

