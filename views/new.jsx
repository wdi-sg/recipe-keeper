const React = require("react");
const Layout = require("./layout");

class Create extends React.Component {
  render() {
    return (
      <Layout>
        <div className="container">
          <form action="/recipes" method="POST">
            <div class="form-group">
              <label for="exampleFormControlInput1">Recipe Title</label>
              <input
                type="text"
                class="form-control"
                id="exampleFormControlInput1"
                name="title"
                required
              />
            </div>

            <div className="row d-flex justify-content-between">
              <div class="form-group col-4">
                <label for="exampleFormControlInput1">Ingredient</label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  name="name"
                  required
                />
              </div>
              <div class="form-group col-4">
                <label for="exampleFormControlInput1">Amount</label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  name="amount"
                  required
                />
              </div>
              <div class="form-group col-4">
                <label for="exampleFormControlInput1">Notes</label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  name="notes"
                />
              </div>
            </div>

            <div className="row d-flex justify-content-between">
              <div class="form-group col-4">
                <label for="exampleFormControlInput1">Ingredient</label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  name="nameTwo"
                  required
                />
              </div>
              <div class="form-group col-4">
                <label for="exampleFormControlInput1">Amount</label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  name="amountTwo"
                  required
                />
              </div>
              <div class="form-group col-4">
                <label for="exampleFormControlInput1">Notes</label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  name="notesTwo"
                />
              </div>
            </div>

            <div className="row d-flex justify-content-between">
              <div class="form-group col-4">
                <label for="exampleFormControlInput1">Ingredient</label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  name="nameThree"
                  required
                />
              </div>
              <div class="form-group col-4">
                <label for="exampleFormControlInput1">Amount</label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  name="amountThree"
                  required
                />
              </div>
              <div class="form-group col-4">
                <label for="exampleFormControlInput1">Notes</label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  name="notesThree"
                />
              </div>
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
                required
              ></textarea>
            </div>
            <div class="form-group">
              <label for="exampleFormControlInput1">Recipe Image</label>
              <input
                type="url"
                class="form-control"
                id="exampleFormControlInput1"
                name="image"
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

module.exports = Create;
