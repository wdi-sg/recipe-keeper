var React = require('react');

class Home extends React.Component {
    render() {
        const recipes = this.props.recipes.map((recipe, index) => {
            return <div className="recipeContainer">
                     <img src={recipe.img}/>
                     <a href={"/recipes/" + index}>
                     <h3>{recipe.title}</h3>
                     </a>
                   </div>
        });

        return (
            <html>
                <head>
                    <meta charset="utf-8"/>
                    <link rel="stylesheet" type="text/css" href="/style.css"/>
                </head>
                <body>
                  {recipes}
                </body>
            </html>
           )
    }
}


module.exports = Home;