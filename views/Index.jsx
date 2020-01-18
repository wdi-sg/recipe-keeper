const React = require("react");

class New extends React.Component {
  render() {
    const recipes = this.props.recipes.map(recipes => {
      const dir = "" + "recipes/";
      const id = recipes.id;
      const route = dir + id;
      return (
        <li>
          <a href={route}>{recipes.id}</a>
        </li>
      );
    });

    return (
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <meta http-equiv="X-UA-Compatible" content="ie=edge" />
          <title>Document</title>
          <link
            rel="stylesheet"
            href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
            integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
            crossorigin="anonymous"
          />
          <script
            src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"
            integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6"
            crossorigin="anonymous"
          ></script>
        </head>

        <body>
          <div style={{ margin: `20px` }}>
            <h1 style={{ fontSize: `3rem` }}>Recipe Keeper</h1>

            <button className="btn btn-primary" style={{ marginTop: `10px` }}>
              <a href="recipes/new" style={{ color: `white` }}>
                Create New Recipes!
              </a>
            </button>
          </div>
          <ul>{recipes}</ul>
        </body>
      </html>
    );
  }
}

module.exports = New;
