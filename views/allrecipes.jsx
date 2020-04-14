const React = require('react');

class Allrecipes extends React.Component {

    render(){
        // CSS things
        const title = {"textAlign" : "center"};

        const foodDiv = {
                        "height" : "130px",
                        "width" : "191px",
                        "margin" : "30px 20px"
                        }

        const foodImage = {
                            "height" : "130px",
                            "width" : "191px",
                        };

        const foodTitle = {
                            "textAlign" : "center"
                          };

        const recipeTitlesStyle = {
                                   "display" : "flex",
                                   "flex-direction" : "row",
                                   "flex-wrap" : "wrap"
                                  }

        // Javascript things

        const recipeImages = this.props.recipeImageArray;

        const recipeTitles = this.props.recipeTitleArray.map((el, i) => {
            return (
                <div style={foodDiv}>
                    <img src={`${recipeImages[i]}`} style={foodImage}></img><br></br>
                    <a href={`./singlerecipe/${i}`} style={foodTitle}>{el}</a>
                </div>
            )

        })

        const searchRecipe = <form action="/searchrecipe" method="get">
                                <input type="text" name="search" placeholder="Search a Recipe"></input><br></br>
                                <input type="submit" value="submit" placeholder="Submit"></input>
                            </form>

        const searchIngredient = <form action="/searchingredient" method="get">
                                <input type="text" name="search" placeholder="Search recipes by ingredients"></input><br></br>
                                <input type="submit" value="submit" placeholder="Submit"></input>
                            </form>



        return(
            <html>
                <head>
                    <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
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
                    <h1 style={title}>All Recipes</h1>
                    <div>
                        {searchRecipe}
                    </div>
                    <div>
                        {searchIngredient}
                    </div>
                    <div style={recipeTitlesStyle}>
                        {recipeTitles}
                    </div>
                </body>
            </html>

        )
    }
}

module.exports = Allrecipes