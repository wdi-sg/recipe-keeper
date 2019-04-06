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

class MainContent extends React.Component{
    render(){
        return(
            <div class="container">
                <div class="row">
                    <div class="row">
                        <div class="card">
                            <div class="card-body">
                                <img class="card-img" src="https://i.imgur.com/HJssYzN.jpg" alt="picture" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

class Home extends React.Component{
    render(){
        const listObj = this.props.objToRender;
        const listArr = listObj[0].category;
        console.log(`Inside HOME PAGE ${listObj}`);
        console.log(`Inside HOME PAGE !!!@#$ ${listArr}`);

        return (
            <html>
                <Head/>
                <body>
                    <header>
                        <h1>Recipe List Collector</h1>
                    </header>
                    <main>
                        <NavAndAside/>
                        <div class="content">
                            <MainContent/>
                        </div>
                    </main>
                </body>
            </html>
        )
    }
}

module.exports = Home;