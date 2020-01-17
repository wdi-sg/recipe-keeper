const React = require("react");
const Layout = require("./layout");

class Home extends React.Component {
  render() {
    const recipes = this.props.recipes.recipes;
    const recipe = recipes.map(item => {
      return (
        <div className=" col-lg-6">
          <img className="card-img-top" src={item.image} alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">{item.title}</h5>
            <p className="card-text">Ingredients: {item.ingredients}</p>
          </div>
        </div>
      );
    });
    return (
      <Layout>
        <div className="container">
          <h1 className={"display-1"} style={{textAlign:"center", marginBottom:"20px"}}>Recipe Keepr</h1>
          <div className="row">{recipe}</div>
        </div>
      </Layout>
    );
  }
}

module.exports = Home;
