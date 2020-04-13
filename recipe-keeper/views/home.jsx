var React = require('react');

var Layout = require('./layout');

class Home extends React.Component {
  render() {

    let recipeList = this.props.recipes.map((recipes,index)=>{
        let linkView = "/recipes/"+index;
        let linkEdit = "/recipes/"+index+"/edit";
        return (
        <div className="col col-lg-3 col-md-6 col-sm-12 mb-4">
            <div className="card" style={{width: "18rem"}}>
                <img src="https://www.simplyrecipes.com/wp-content/uploads/2015/09/roasted-chicken-apricot-glaze-horiz-a-1500.jpg" className="card-img-top" alt="chicken"/>
                <div className="card-body">
                <h5 className="card-title">{recipes.title}</h5>
                <p className="card-text">Ingredients: {recipes.ingredients}</p>
                <a href={linkView} className="btn btn-primary">View</a>
                </div>
            </div>
        </div>
            );
    });
    return (
        <Layout>
            <h1>Recipes</h1>
                <div className="row">
                {recipeList}
                </div>
        </Layout>
    );
  }
}

module.exports = Home;