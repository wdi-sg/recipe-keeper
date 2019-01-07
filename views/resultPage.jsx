var React = require("react");

class Resultpage extends React.Component {
  // state = {  }
  render() {
    const searchTerm = this.props.passObj.search;
    const recipeList = this.props.passObj.recipes.map((obj, index) => {
      if (obj.title.toLowerCase().includes(searchTerm.toLowerCase())) {
        return (
          <div key={index} className="card cardsWidth boxshadow">
            <div className="card-body">
              <h5 className="card-title">{obj.title}</h5>
              <h6 className="card-subtitle mb-2 text-muted">
                Ingredients: {obj.ingredients.join(", ")}
              </h6>
              <p className="card-text">Instructions: {obj.instructions}</p>
              <a
                className="btn btn-warning mr-3"
                href={"/recipes/" + obj.index + "/edit"}
              >
                Edit recipe
              </a>
              <a
                className="btn btn-warning mr-3"
                data-toggle="modal"
                data-target="#exampleModal"
              >
                Delete recipe
              </a>
              <div
                className="modal fade"
                id="exampleModal"
                tabIndex="-1"
                role="dialog"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog" role="document">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="exampleModalLabel">
                        Deleting {obj.title}
                      </h5>
                      <button
                        type="button"
                        className="close"
                        data-dismiss="modal"
                        aria-label="Close"
                      >
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div className="modal-body">
                      Do you wish to delete this recipe?
                    </div>
                    <div className="modal-footer">
                      <button
                        type="button"
                        className="btn btn-secondary"
                        data-dismiss="modal"
                      >
                        Back
                      </button>
                      <form
                        action={"/recipes/" + obj.index + "?_method=DELETE"}
                        method="post"
                      >
                        <button type="submit" className="btn btn-primary">
                          Delete
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      }
    });

    return (
      <html>
        <head>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          <link
            rel="stylesheet"
            href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"
            integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO"
            crossOrigin="anonymous"
          />
          <link rel="stylesheet" href="../../style.css" />
          <title>Recipe Keeper</title>
        </head>
        <body>
          <ul className="nav nav-pills bg-warning navHeight sticky-top">
            <li className="nav-item">
              <a className="nav-link" href="/recipes/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/recipes/new">
                Add Recipe
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link now-active" href="/recipes/search">
                Search Recipe
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/contacts">
                Contacts
              </a>
            </li>
          </ul>
          <div className="searchWidth boxshadow">
            <form action="/recipes/search/results" method="post">
              <div className="input-group mb-3">
                <input
                  name="search"
                  type="text"
                  className="form-control"
                  placeholder="Enter a single keyword here"
                  aria-label="Enter a single keyword here"
                  aria-describedby="button-addon2"
                />
                <div className="input-group-append">
                  <button
                    className="btn btn-outline-secondary"
                    type="submit"
                    id="button-addon2"
                  >
                    Search
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div className="midWidth">{recipeList}</div>
          <script
            src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
            integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
            crossOrigin="anonymous"
          />
          <script
            src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js"
            integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49"
            crossOrigin="anonymous"
          />
          <script
            src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js"
            integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy"
            crossOrigin="anonymous"
          />
        </body>
      </html>
    );
  }
}

module.exports = Resultpage;
