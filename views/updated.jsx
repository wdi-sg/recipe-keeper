var React = require('react');

class Head extends React.Component{
    render(){
        return(
            <head>
                <meta charSet="utf-8"/>
                <title>UPDATE SUCCESS!</title>
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossOrigin="anonymous"/>
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"/>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
                <link rel="stylesheet" href="/style.css"/>
            </head>
        )
    }
}

class Aside extends React.Component{
    render(){
        return(
            <aside>
                <figure>
                    <h4>Recently Viewed</h4>
                    <img class="side-img" src="https://i.imgur.com/YTGycJi.jpg" />
                </figure>
            </aside>
        );
    }
}

class Navigation extends React.Component{
    render(){
        return(
            <nav>
                <ul class="nav flex-column">
                    <li class="nav-item">
                        <a method="GET" href="/recipe/new"><span class=" glyphicon glyphicon-plus" aria-hidden="true"></span>Add New Recipe</a>
                    </li>
                </ul>
            </nav>
        );
    }
}

class Update extends React.Component{
    render(){

        const inputData = this.props.objToRender;
        console.log("In react sucess: " + inputData);


        return(
            <html>
                <Head/>
                <body>
                    <header>
                        <h1></h1>
                    </header>
                    <main>
                        <Navigation/>
                        <Aside/>
                        <div class="content">
                            <div class="col">
                                <div class = "row">
                                <h4>Your List of Recipes has been Updated!</h4>
                                </div>
                                <div class="row">
                                    <a method="GET" href="/"><span class="glyphicon glyphicon-home" aria-hidden="true"></span> Return to home</a>
                                </div>
                            </div>
                        </div>
                    </main>
                </body>
            </html>
        )
    }
}

module.exports= Update;