var React = require('react');

class Default extends React.Component{
    render(){
        return (
            <React.Fragment>
                <head>
                    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
                    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossOrigin="anonymous"/>
                    <link rel="stylesheet" type="text/css" href="/style.css"/>
                    <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro" rel="stylesheet"/>
                    <link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet"/>
                    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossOrigin="anonymous"></script>
                    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossOrigin="anonymous"></script>
                    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossOrigin="anonymous"></script>
                </head>
                <header>
                    <img src="https://images.vexels.com/media/users/3/143221/isolated/preview/0654b09f8ecee586c3f9fe80d602e197-red-sea-animal-fish-cartoon-by-vexels.png"/>
                    <h1>Creepylobster's Cookbook</h1>
                    <ul>
                        <a href='/recipes/'><li>Home</li></a>
                        <a href='/recipes/new'><li>Create new recipe</li></a>
                    </ul>
                </header>
                <body>
                    {this.props.children}
                </body>
            </React.Fragment>
        )
    }
}

module.exports = Default;