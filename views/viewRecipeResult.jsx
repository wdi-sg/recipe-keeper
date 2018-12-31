var React = require('react');

class ViewRecipeResult extends React.Component {

    render() {

    function createAList(item, index) {
            return <li key={index} className="list"> {item} </li>;
        }

    let itemsOfIngredient = this.props.ingredients.map(createAList);
    let itemsOfInstruction = this.props.instructions.map(createAList);

    return (
            <html>
            <head>
            </head>
            <link rel="stylesheet" href="/style-viewRecipeResult.css"/>
            <body>
                <div className="wrapper">
                    <div className="nav">
                        <h1> Welcome to Pasta Recipe </h1>
                        <a href="/recipes" id="currentPage"> Search for all recipe </a>
                        <a href="/recipes/new"> Create New Recipe </a>
                        <a href="/recipes/delete"> Delete A Recipe </a>
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