var React = require('react');

class ViewUpdateRecipe extends React.Component {

  render() {
    let title = "";
    title = title + this.props.title;

    let ingredients = "";
    for (let i = 0; i < this.props.ingredients.length-1; i++ ) {
        ingredients = ingredients + this.props.ingredients[i] + '\r\n';
    }
    ingredients = ingredients + this.props.ingredients[this.props.ingredients.length-1];

    let instructions ="";
    for (let i = 0; i < this.props.instructions.length-1; i++ ) {
        instructions = instructions + this.props.instructions[i] + '\r\n';
    }
    instructions = instructions + this.props.instructions[this.props.instructions.length-1];

    let urlAction="/recipes/update/" + this.props.id + "?_method=put";

    return (
            <html>
            <head>
            </head>
            <link rel="stylesheet" href="/style-createRecipe.css"/>
            <body>
                <h1> Welcome to Pasta Recipe </h1>
                <div className="nav">
                    <a href="/recipes"> Search for all recipe </a>
                    <a href="/recipes/new"> Create New Recipe </a>
                    <a href="/recipes/delete"> Delete A Recipe </a>
                    <a href="/recipes/update" id="currentPage"> Update A Recipe </a>
                </div>
                <div className="firstContent">
                    <form action={urlAction} method="POST">
                    <label>Title: </label> <br/>
                    <textarea rows="1" cols="100" type="text" name="title" defaultValue={title}/>
                    <br/> <br/>
                    <label>Ingredients: </label> <br/>
                    <textarea rows="5" cols="100" type="text" name="ingredients" defaultValue={ingredients}/>
                    <br/> <br/>
                    <label>Instructions: </label> <br/>
                    <textarea rows="10" cols="100" type="text" name="instructions" defaultValue={instructions}/>
                    <br/> <br/>
                    <button type="submit"> Update this recipe </button>
                    </form>
                </div>
                <div className="footer">
                    <p>Copyright <span> &copy;</span> 2018 Lim Siew Leng</p>
                </div>
            </body>
            </html>
    );
  }
}

module.exports = ViewUpdateRecipe;