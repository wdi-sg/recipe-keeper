var React = require("react");

class Searchpage extends React.Component {
  // state = {  }
  render() {
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
                <input name="search" type="text" className="form-control" placeholder="Enter a single keyword here" aria-label="Enter a single keyword here" aria-describedby="button-addon2"/>
                <div className="input-group-append">
                  <button className="btn btn-outline-secondary" type="submit" id="button-addon2">Search</button>
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

module.exports = Searchpage;
