var React = require('react');
var Layout = require('./layout');
var RecipeSearch = require('./recipesearch');
var RecipeCreate = require('./recipeCreate');
var RecipeHero = require('./recipehero');

class Home extends React.Component {
  render() {
    return (
                <Layout>
                    <nav class="navbar navbar-dark bg-dark fixed-top">
                      <a class="navbar-brand text-light">Sexy Hotpots</a>
                      <form class="form-inline" method="POST" action="/recipes/0">
                        <input class="form-control mr-sm-2" type="search" placeholder="Search By Recipe No" aria-label="Search" name="recipeId" id="recipeId"/>
                        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                      </form>
                    </nav>
                    <br/><br/>
                    <div>
                      <h1>The Sexy Hotpots Cookery</h1>
                    </div>
                    <RecipeHero/>
                    <RecipeSearch/>
                    <br/>
                    <RecipeCreate/>
                </Layout>
    );
  }
}

module.exports = Home;


                      // <form class="form-inline" method="POST" action={url>


                       // <p> Today we are going to learn how to make.... {this.props.title}</p>
                       // <p> You will need {this.props.ingredients[0]} and {this.props.ingredients[1]}</p>
                       // <p> Instructions: {this.props.instructions}</p>