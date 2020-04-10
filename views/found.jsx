const React = require("react");
const Layout = require("./layout");

class Found extends React.Component {
  render() {
    const searchString = this.props.searchString;
    const foundMatch = this.props.recipes.map(recipe => {
      const recipePath = "/recipes/" + recipe.id;
      return (
        <div className=" col-lg-4">
          <a href={recipePath}>
            <img
              className="card-img-top img-fluid"
              src={recipe.image}
              alt="Card image cap"
              style={{
                maxHeight: "300px",
                maxWidth: "300px",
                borderRadius: "2px",
                display: "block",
                margin: "0 auto"
              }}
            />
          </a>
          <div className="card-body" style={{ padding: "10px 0" }}>
            <h5 className="card-title" style={{ textAlign: "center" }}>
              Get recipe:
              <a
                className="recipe-link"
                href={recipePath}
                style={{ color: "#FF8429", textDecoration: "underline" }}
              >
                {" "}
                {recipe.title}
              </a>
            </h5>
          </div>
        </div>
      );
    });

    return (
      <Layout>
        <div className="container">
          <h1
            className={"display-3"}
            style={{ textAlign: "center", marginBottom: "20px" }}
          >
            Recipe Keepr
          </h1>
          <h5 style={{ textAlign: "center" }}>{searchString}</h5>
          <div className="row d-flex justify-content-center">{foundMatch}</div>
        </div>
      </Layout>
    );
  }
}

module.exports = Found;
