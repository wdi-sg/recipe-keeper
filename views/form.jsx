var React = require("react");
const Nav = require("./navbar");
class Form extends React.Component {
  render() {
    let ingArr = this.props.ingredient;
    let ingredientChoice = ingArr.map(item => {
      return <option value={item.name}>{item.name}</option>;
    });
    return (
      <html>
        <head>
          <link
            rel="stylesheet"
            href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"
            integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO"
            crossOrigin="anonymous"
          ></link>
        </head>
        <body>
          <Nav />
          <div className="container text-center pt-5">
            <h1 className="display-2">Add a Recipe</h1>
            <form method="POST" action="/added" className="pt-3">
              <p>
                <input
                  type="text"
                  name="name"
                  placeholder="Dish Name"
                  class="form-control form-control-lg"
                />
              </p>
              <h5>Ingredients: </h5>

              <select
                class="form-control form-control-lg"
                name="ingredients"
                id="ingredients"
                multiple
                size="3"
              >
                {ingredientChoice}
              </select>
              <br />
              <p>
                <textarea
                  class="form-control form-control-lg"
                  type="text"
                  name="instructions"
                  placeholder="Instructions"
                ></textarea>
               
              </p>
              <button type="submit" className="btn btn-success btn-lg btn-block" >Add</button>
            </form>
          </div>
        </body>
      </html>
    );
  }
}

module.exports = Form;
