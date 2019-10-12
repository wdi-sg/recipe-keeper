const React = require("react");
const Layout = require("./Layout");

class NewIngredient extends React.Component {
  render() {
    // console.log("this.props!!!!",this.props);

    return (
      <Layout>
        <div className="container">
          <div className="row">
            <div className="col">
              <h1 className="text-center text-primary">🥕add a new ingredient</h1>
              <form method="POST" action="/ingredients">
                <div className="form-group">
                  <label htmlFor="ingredientName">name</label>
                  <input
                    type="text"
                    className="form-control"
                    name="ingredientName"
                    id="ingredientName"
                    aria-describedby="ingredientName"
                    placeholder="example: chicken"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="ingredientAmount">amount</label>
                  <input
                    type="text"
                    className="form-control"
                    name="ingredientAmount"
                    id="ingredientAmount"
                    aria-describedby="ingredientAmount"
                    placeholder="example: 1"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="ingredientNotes">notes</label>
                  <input
                    type="text"
                    className="form-control"
                    name="ingredientNotes"
                    id="ingredientNotes"
                    aria-describedby="ingredientNotes"
                    placeholder="example: de-boned"
                  />
                </div>
                <button type="submit" class="btn btn-primary">Add</button>
              </form>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

module.exports = NewIngredient;
