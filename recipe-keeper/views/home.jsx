var React = require('react');

var Layout = require('./layout');

class Home extends React.Component {
  render() {

    let recipeList = this.props.recipes.map((recipes)=>{
        return (
        <div className="col col-md-4 mb-4">
            <div className="card" style={{width: "18rem"}}>
                <img src="https://www.simplyrecipes.com/wp-content/uploads/2015/09/roasted-chicken-apricot-glaze-horiz-a-1500.jpg" className="card-img-top" alt="chicken"/>
                <div className="card-body">
                <h5 className="card-title">{recipes.title}</h5>
                <p className="card-text">Ingredients: {recipes.ingredients}</p>
                <p className="card-text">Instructions: {recipes.instructions}</p>
                <a href="recipes/id" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>
            );
    });
    return (
        <Layout>
            <h1>Homepage</h1>
                <div className="row">
                {recipeList}
                </div>
        </Layout>
    );
  }
}

module.exports = Home;