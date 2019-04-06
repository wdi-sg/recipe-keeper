var React = require('react');
var NavAndAside = require('./navAndAside');

class Head extends React.Component{
    render(){
        return(
            <head>
                <meta charSet="utf-8"/>
                <title>Cook Me Up</title>
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossOrigin="anonymous"/>
                <link rel="stylesheet" href="/style.css"/>
            </head>
        )
    }
}

class FormNewRecipe extends React.Component{
    render(){
        return(
            <html>
            <h2>HeLLLOO222</h2>
            </html>
        )
    }
}

class New extends React.Component{
    render(){
        return(
            <html>
                <Head/>
                <body>
                    <header>
                        <h1>Recipe List Collector</h1>
                    </header>
                    <main>
                        <NavAndAside/>
                        <div class="content">
                            <h1>HELLLOOOOO</h1>
                        </div>
                    </main>
                </body>
            </html>
        );
    }
}

module.exports= New;