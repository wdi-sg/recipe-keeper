var React = require('react');
class Home extends React.Component {
    render() {

        const recipesList = this.props.recipes.map((recipe, index) => {
            const recipeLink = '/recipes/'+ (index+1);
            return <li key={recipe.id}><a href={recipeLink}>{recipe.title}</a></li>
        })

        return (
            <html>
                <head>
                    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossOrigin="anonymous"/>
                </head>
                <body>
                        <nav className="navbar bg-light">
                            <h3>&#127968; Code Best Recipes</h3>
                            <a href="/recipes/new" className="navbar-brand">&#43; Create Recipe</a>
                        </nav>

                        <div className="container">
                            <br/>
                            <div className="col">
                                <div>
                                    <p>Welcome to the recipes page. Please select recipes or create your own recipes.</p>
                                    <br/>
                                </div>

                                <div>
                                    <h4>Recipes</h4>
                                    <p>View your recipes</p>
                                    <ol>
                                        {recipesList}
                                    </ol>
                                    <br/>
                                    <br/>
                                </div>
                            </div>
                        </div>


                </body>
            </html>
        );
    };
};

module.exports = Home;