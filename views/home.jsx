var React = require('react');
class Home extends React.Component {
    render() {
            let recipesList;
            if(this.props.sortType === "none") {
                recipesList = this.props.allRecipes.map((recipe) => {
                    let recipeId = recipe.id;
                    let recipeLink = '/recipes/'+ (recipeId);
                    return <li key={recipeId}><a href={recipeLink}>{recipe.title}</a></li>
                });
            } else if (this.props.sortType ==="id") {
                let sortedList = this.props.allRecipes.sort((a, b) => {
                    if (a.id < b.id) {
                        return -1;
                    }
                    if (a.id > b.id) {
                        return 1;
                    }
                    return 0;
                });
                recipesList = sortedList.map((recipe) => {
                    let recipeId = recipe.id;
                    let recipeLink = '/recipes/'+ (recipeId);
                    return <li key={recipeId}><a href={recipeLink}>{recipe.title}</a></li>
                });
            } else if (this.props.sortType === "title") {
                let sortedList = this.props.allRecipes.sort((a, b) => {
                    let c = a.title.toLowerCase();
                    let d = b.title.toLowerCase();
                    if (c < d) {
                        return -1;
                    }
                    if (c > d) {
                        return 1;
                    };
                    return 0;
                });
                recipesList = sortedList.map((recipe) => {
                    let recipeId = recipe.id;
                    let recipeLink = '/recipes/'+ (recipeId);
                    return <li key={recipeId}><a href={recipeLink}>{recipe.title}</a></li>
                });
            };


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


                                    <a href="/recipes">Sort by none</a>
                                    <br/>
                                    <a href="/recipes/sort/id">Sort by ID</a>
                                    <br/>
                                    <a href="/recipes/sort/title">Sort by Title</a>

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