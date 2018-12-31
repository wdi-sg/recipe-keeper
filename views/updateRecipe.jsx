var React = require('react');

class UpdateRecipe extends React.Component {

  render() {

    function createAOption(item, index) {
            return  <option key={index} value={item.title}> {item.title} </option>;
        }

    let itemsOfRecipe = this.props.listOfRecipe.map(createAOption);

    return (
            <html>
            <head>
            </head>
            <link rel="stylesheet" href="/style-viewRecipe.css"/>
            <body>
                <h1> Welcome to Pasta Recipe </h1>
                <div className="nav">
                    <a href="/recipes"> Search for all recipe </a>
                    <a href="/recipes/new"> Create New Recipe </a>
                    <a href="/recipes/delete"> Delete A Recipe </a>
                    <a href="/recipes/update" id="currentPage"> Update A Recipe </a>
                </div>
                <div className="firstContent">
                    <form action = "/recipes/update" method="get">
                        <h2>Select the recipe below: </h2>
                        <select name="recipe" size="10">
                        {itemsOfRecipe}
                        </select>
                        <br/><br/>
                        <button type="submit"> update this item </button>
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

module.exports = UpdateRecipe;