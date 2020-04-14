const React = require('react');

class Home extends React.Component {
    render() {




        const recipeDetails = this.props.recipeObj.map( (info, index) => {
            const link = '/recipe/' + (index + 1);
                return (
                <div>
                 <li class="list-group-item recipe-title"><a href={link}>{info.title}</a></li>
                </div>
                )
        });


        return (
            <html>
            <head>
            <link rel="stylesheet" href="/style.css"/>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous"/>
            </head>
                <body>
                    <div className="homepage">
                    <div class="jumbotron bg-info jumbotron-fluid">
                        <div class="container container-header">
                            <h1 class="display-4">Recipe Builder</h1>
                            <p class="lead">If Ian can cook so can you!</p>
                        </div>
                    </div>
                    <h1>Existing Recipes</h1>
                    <ul class="list-group list-group-flush">
                        {recipeDetails}
                    </ul>


                    <p className="add-recipe"><a href="/recipe/add">Add Recipe</a></p>
                    </div>
                </body>
            </html>
            )
    }
}

module.exports = Home;