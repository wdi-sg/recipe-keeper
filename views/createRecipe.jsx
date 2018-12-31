var React = require('react');

class CreateRecipe extends React.Component {

  render() {
    return (
            <html>
            <head>
            </head>
            <link rel="stylesheet" href="/style-createRecipe.css"/>
            <body>
                <h1> Welcome to Pasta Recipe </h1>
                <div className="nav">
                    <a href="/recipes"> Search for all recipe </a>
                    <a href="/recipes/new" id="currentPage"> Create New Recipe </a>
                    <a href="/recipes/delete"> Delete A Recipe </a>
                    <a href="/recipes/update"> Update A Recipe </a>
                </div>
                <div className="firstContent">
                    <form action="/recipes/new/updated" method="post">
                    <label>Title: </label> <br/>
                    <textarea rows="1" cols="100" type="text" name="title"/>
                    <br/> <br/>
                    <label>Ingredients: </label> <br/>
                    <textarea rows="5" cols="100" type="text" name="ingredients"/>
                    <br/> <br/>
                    <label>Instructions: </label> <br/>
                    <textarea rows="10" cols="100" type="text" name="instructions"/>
                    <br/> <br/>
                    <button type="submit"> Submit </button>
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

module.exports = CreateRecipe;