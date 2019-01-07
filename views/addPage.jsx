var React = require("react");

class Addpage extends React.Component {
  // state = {  }
  render() {

    let addIndex = parseInt(this.props.passObj.recipes.length);

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
          <link rel="stylesheet" href="../style.css" />
          <title>Recipe Keeper</title>
        </head>
        <body>
          <ul className="nav nav-pills bg-warning navHeight">
            <li className="nav-item">
              <a className="nav-link" href="/recipes/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link now-active" href="/recipes/new">
                Add Recipe
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/recipes/search">
                Search Recipe
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/contacts">
                Contacts
              </a>
            </li>
          </ul>
          <div className="formWidth boxshadow">
            <form action="/recipes" method="post">
              <div className="form-group">
                <label htmlFor="titleInput">Recipe Title</label>
                <input
                  name="title"
                  className="form-control"
                  id="titleInput"
                  aria-describedby="titleHelp"
                  placeholder="Enter your recipe title"
                />
                <small id="titleHelp" className="form-text text-muted">
                  Your recipe title must consist of at least 4 alphabet letters.
                </small>
              </div>
              <div className="form-group">
                <label htmlFor="ingreInput">Ingredients</label>
                <input
                  name="ingredient"
                  className="form-control"
                  id="ingreInput"
                  aria-describedby="ingreHelp"
                  placeholder="Enter your ingredients"
                />
                <small id="ingreHelp" className="form-text text-muted">
                  Please separate ingredients with a comma and space, e.g. "1
                  whole chicken, 100ml of water, 3 slices of ginger".
                </small>
              </div>
              <div className="form-group">
                <label htmlFor="instrucTextArea">Instructions</label>
                <textarea
                  name="instruction"
                  className="form-control"
                  id="instrucTextArea"
                  rows="6"
                />
              </div>
              <button
                type="button"
                className="btn btn-primary"
                data-toggle="modal"
                data-target="#exampleModal"
              >
                Submit
              </button>
              <div className="form-group formHide">
                <input
                  name="index"
                  className="form-control"
                  id="titleInput"
                  aria-describedby="titleHelp"
                  value={addIndex}
                />
              </div>
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
                        Confirmation
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
                      Do you wish to add this recipe?
                    </div>
                    <div className="modal-footer">
                      <button
                        type="button"
                        className="btn btn-secondary"
                        data-dismiss="modal"
                      >
                        Back
                      </button>
                      <button type="submit" className="btn btn-primary">
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
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

module.exports = Addpage;
