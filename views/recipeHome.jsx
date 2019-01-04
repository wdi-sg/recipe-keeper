var React = require('react');
var Head = require('./head.jsx');
var Header = require('./header.jsx');
var Nav = require('./nav.jsx');
var Footer = require('./footer.jsx');
var Scripts = require('./scripts.jsx');

class recipeHome extends React.Component {

    render() {
        const recipes = this.props.recipes.map(recipe => {
            return  <div className="eachRecipeContainer">
                        <a href={'/recipes/' + recipe.Id}>
                            <img src={recipe.Image} />
                            <h2>{recipe.Title}</h2>
                        </a>
                    </div>
        })


        return(
           <html>
                <Head/>
                <body>
                    <Header/>
                    <Nav/>
                    <div className="all">
                        {recipes}
                    </div>
                    <Footer/>
                    <Scripts/>
                </body>
            </html>

            )
    }
}

module.exports = recipeHome;