const React = require('react');

class Sortbyrecipe extends React.Component {

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

        const recipeRequested = this.props.recipeRequested;

        const recipeID = this.props.recipeIDArray;

        const recipeImg = this.props.recipeImgArray;

        const recipeTitles = this.props.recipeTitleArray.map((el, i) => {
            return (
                <div style={foodDiv}>
                    <img src={`${recipeImg[i]}`} style={foodImage}></img><br></br>
                    <a href={`./singlerecipe/${recipeID[i]}`} style={foodTitle}>{el}</a>
                </div>
            )

        })



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
                    <h1 style={title}>{recipeRequested}</h1>
                    <div style={recipeTitlesStyle}>
                        {recipeTitles}
                    </div>
                </body>
            </html>

        )
    }
}

module.exports = Sortbyrecipe;