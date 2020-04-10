const React = require("react");
const Layout = require("./layout");

class Edit extends React.Component {
  render() {
    const recipe = this.props;
    const filePath = "/recipes/" + recipe.id + "?_method=put";
    return (
      <Layout>
        <div className="container">
          <form action={filePath} method="POST">
            <div class="form-group">
              <label for="exampleFormControlInput1">Recipe Title</label>
              <input
                type="text"
                class="form-control"
                id="exampleFormControlInput1"
                name="title"
                placeholder={recipe.title}
                minLength="3"
              />
            </div>
            <div class="form-group">
              <label for="exampleFormControlInput1">Recipe Ingredients</label>
              <input
                type="text"
                class="form-control"
                id="exampleFormControlInput1"
                name="ingredients"
                placeholder={recipe.ingredients}
                minLength="4"
              />
            </div>
            <div class="form-group">
              <label for="exampleFormControlTextarea1">
                Recipe Instructions
              </label>
              <textarea
                class="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
                name="instructions"
                placeholder={recipe.instructions}
                minLength="30"
              ></textarea>
            </div>
            <div class="form-group">
              <label for="exampleFormControlInput1">Recipe Image Link</label>
              <input
                type="url"
                class="form-control"
                id="exampleFormControlInput1"
                name="image"
                placeholder={recipe.image}
                required
              />
            </div>
            <input className="btn btn-primary" type="submit"></input>
          </form>
        </div>
      </Layout>
    );
  }
}

module.exports = Edit;
