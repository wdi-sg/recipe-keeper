var React = require('react');
var Layout = require('./layout');

class RecipeHero extends React.Component {
  render() {
    return (
                <Layout>
                    <div class="jumbotron recipe-hero">
                      <h1 class="display-4">Crispy Chicken <br/>Teriyaki Rice Balls</h1>
                      <a class="btn btn-primary btn-lg" href="http://localhost:3000/recipes/1" role="button">Make Your Own!</a>
                      <br/> <br/><br/><br/>
                    </div>
                </Layout>
    );
  }
}

module.exports = RecipeHero;

                      // <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                      // <hr class="my-4"/>