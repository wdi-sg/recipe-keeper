var React = require('react');
class Home extends React.Component {
    render() {

        const recipesList = this.props.recipes.map((recipe, index) => {
            const recipeLink = '/recipes/'+(index+1);
            return <li><a href={recipeLink}>{recipe.title}</a></li>
        })
        return (
            <html>
                <head>
                    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossOrigin="anonymous"/>
                </head>
                <body>
                    <div className="container">
                        <div className="row">
                            <h3>Code Best Recipes</h3>
                            <p>Welcome to the recipes page. Please select recipes or create your own recipes.</p>
                            <br/>
                        </div>

                        <div>
                            <h4 className="row">Recipes</h4>
                            <p>View your recipes</p>
                            <ol>{recipesList}</ol>
                            <br/>
                            <br/>
                        </div>

                        <div>
                            <h4 className="row">Create Recipes </h4>
                            <p>Click on the following link to create recipe of your own.</p>
                            <a href="/recipes/new">Create Recipes</a>
                        </div>
                    </div>
                </body>
            </html>
        );
    };
};

module.exports = Home;