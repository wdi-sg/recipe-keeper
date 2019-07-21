var React = require('react');
class homepage extends React.Component {
  render() {

    const recipeCards = this.props.recipes.map(recipes =>{
        let recipePage = "/recipes/" + recipes.num;
        return (
                <div className="recipes-card">
                    <a href={recipePage}>
                        <img src={recipes.img}/>
                        <p>{recipes[this.props.sortRequest]}</p>
                        <h1>{recipes.name}</h1>
                    </a>
                </div>
            )
    });

    return (
        <html>
        <head>
            <title>All Recipes</title>
            <link href="https://fonts.googleapis.com/css?family=Ubuntu:300,400&display=swap" rel="stylesheet"/>
            <link rel="stylesheet" type="text/css" href="/style.css"/>
        </head>

        <header>
            <nav>
                <ul id="nav-container">
                    <li className="item"><a href="/recipes">Home</a></li>
                    <li className="item"><a href="/recipes/featured">Featured</a></li>
                    <li className="item"><a href="/recipes/new">New</a></li>
                    <div id="bar"></div>
                </ul>
            </nav>
            <a href="/recipes"><img id="header-img" src="/header.png"/></a>
        </header>

        <body>

            <h3>Sort Those Recipes!</h3>

            <form method='GET' action='/recipes'>
                <select name='sortby'>
                    <option value='num'>Recipes Number</option>
                    <option value='name'>Name</option>
                </select>
                <input type='submit'/>
            </form>

            <div id="recipes-container">
            {recipeCards}
            </div>
        </body>

        </html>
    );
  }
}

module.exports = homepage;