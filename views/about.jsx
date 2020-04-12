const React = require('react');

class About extends React.Component {

    render(){
        // CSS things
        const title = {"textAlign" : "center"};

        const content = {"textAlign" : "center"};

        // Javascript things

        return(
            <html>
                <head>
                    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossOrigin="anonymous"></link>
                </head>
                <nav>
                    <ul class="nav justify-content-center">
                        <li class="nav-item">
                            <a class="nav-link active" href="/">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/allrecipes">All Recipes</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/about">about RecipeList</a>
                        </li>
                    </ul>
                </nav>
                <body>
                    <h1 style={title}>About Recipe List</h1>
                    <div>
                        <p style={content}>Just a collection of junk recipes that honestly nobody should use.</p>
                    </div>
                </body>
            </html>

        )
    }
}

module.exports = About