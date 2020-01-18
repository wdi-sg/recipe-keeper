const React = require("react");
const Footer = require("./footer");

class Layout extends React.Component {
  render() {
    return (
      <html lang="en">
        <head>
          <title>Recipe Keepr</title>
          <link
            rel="stylesheet"
            href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
            integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
            crossOrigin="anonymous"
          />

          <script
            src="https://code.jquery.com/jquery-3.2.1.slim.min.js"
            integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN"
            crossOrigin="anonymous"
          ></script>
          <script
            src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"
            integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q"
            crossOrigin="anonymous"
          ></script>
          <script
            src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"
            integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl"
            crossOrigin="anonymous"
          ></script>
        </head>
        <body>
          <nav className="navbar navbar-expand-lg navbar-light bg-light mb-3">
            <a className="navbar-brand" href="/">
              Recipe Keepr
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <a className="nav-link text-center" href="/recipes/new">
                    New
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle text-center"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Sort
                  </a>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <a
                      className="dropdown-item text-center"
                      href="/recipes/sort/name"
                    >
                      Sort by alphabetical order
                    </a>
                    <a
                      className="dropdown-item text-center"
                      href="/recipes/sort/date"
                    >
                      Sort by newly added
                    </a>
                  </div>
                </li>
              </ul>

              <form
                className="form-inline my-2 my-lg-0"
                method="GET"
                action="/recipes/search"
                style={{display:"flex", justifyContent:"center"}}
              >
                <input
                  className="form-control mr-sm-2"
                  type="search"
                  placeholder="Find a recipe!"
                  aria-label="Search"
                  name="search"
                  required
                />
                <button
                  className="btn btn btn-outline-warning my-2 my-sm-0"
                  type="submit"
                >
                  Search
                </button>
              </form>
            </div>
          </nav>
          <div className="fluid-container">{this.props.children}</div>
          <Footer />
        </body>
      </html>
    );
  }
}

module.exports = Layout;
