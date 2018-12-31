var React = require('react');

class ViewRecipeResult extends React.Component {

    render() {

    function createAList(item, index) {
            return <li key={index} className="list"> {item} </li>;
        }

    let itemsOfIngredient = this.props.ingredients.map(createAList);
    let itemsOfInstruction = this.props.instructions.map(createAList);
    {/* let actionUrl = `/recipes/delete/${this.props.id}/?_method=delete`; */}
    let actionUrl = "/recipes/delete/" + this.props.id + "/?_method=delete";

    return (
            <html>
            <head>
            </head>
            <link rel="stylesheet" href="/style-viewDeleteRecipe.css"/>
            <body>
                <div className="wrapper">
                    <div className="nav">
                        <h1> Welcome to Pasta Recipe </h1>
                        <a href="/recipes"> Search for all recipe </a>
                        <a href="/recipes/new"> Create New Recipe </a>
                        <a href="/recipes/delete" id="currentPage"> Delete A Recipe </a>
                        <a href="/recipes/update"> Update A Recipe </a>
                    </div>
                    <div className="firstContent">
                        <h2> {this.props.title} </h2>
                        <h2> Ingredients </h2>
                        <ul>
                            {itemsOfIngredient}
                        </ul>
                        <br/>
                        <h2> Instructions </h2>
                        <ol>
                            {itemsOfInstruction}
                        </ol>
                        <br/><br/>
                        <form method="POST" action= {actionUrl}>
                        <button type="submit"> delete this recipe </button>
                        </form>
                    </div>
                    <div className="footer">
                        <p>Copyright <span> &copy;</span> 2018 Lim Siew Leng</p>
                    </div>
                </div>
            </body>
            </html>
        );
    }
}

module.exports = ViewRecipeResult;