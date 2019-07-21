var React = require('react');

class Home extends React.Component {
  render() {
    const recipeCards = this.props.recipes.map(recipes =>{
        let recipePage = "/recipes/"+recipes.id;
        return (
            <div className = "recipeCards">
                <a href = {recipePage}>
                    <img src = {recipes.img}/>
                    <p>{recipes[this.props.sortRequest]}</p>
                    <h1>{recipes.name}</h1>
                </a>
            </div>
        )
    });


    return(
        <html>
            <head>
            <link rel="stylesheet" type="text/css" href="/style.css"/>
            </head>
            <body>
                <h1>Home: Sort Recipes</h1>
                <form method = "GET" action="/recipes">
                    <select name ="sortby">
                        <option value = "id">Sort by Id</option>
                        <option value = "name">Sory by Name</option>
                    </select>
                    <input type ="submit"/>
                </form>
                <div className = "recipeContainer">
                    {recipeCards}
                </div>
            </body>
        </html>
    )
  }
}


module.exports = Home;