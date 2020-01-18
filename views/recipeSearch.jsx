const React = require("react");

class Created extends React.Component {
  render() {
    console.log(this.props.id);
    const id = parseInt(this.props.id);
    const editPath = "/recipes/" + id + "/edit";
    const recipesTitle = this.props.title
    return (
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <meta http-equiv="X-UA-Compatible" content="ie=edge" />
          <title>{recipesTitle}!</title>
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
          <h2 style={{ margin: "10px" }}>
            {recipesTitle}!
          </h2>
          <ul>
            <li><strong>Id</strong>: {this.props.id}</li>
            <li><strong>Title</strong>: {this.props.title}</li>
            <li><strong>Ingredients</strong>: {this.props.ingredients}</li>
            <li><strong>instructions</strong>: {this.props.instructions}</li>
          </ul>
          <button style={{ borderRadius: `5px`, marginLeft:`20px` }}>
            <a href={editPath}>Edit {recipesTitle}</a>
          </button>
          <button style={{ borderRadius: `5px` }}>
            <a href="/recipes/">Recipe Index</a>
          </button>
          <div
            style={{ margin: `20px`, display: `flex`, flexDirection: `column` }}
          >
            <h1>Delete {this.props.id}?</h1>

            <form action={"/recipes/" + parseInt(this.props.id) + "?_method=delete"} method="POST">
              <div>
                <input
                  type="submit"
                  value="Delete!"
                  style={{ borderRadius: `5px`, marginRight: `10px` }}
                />
               <button style={{ borderRadius: `5px` }}>
                  <a href="/recipes/">Recipe Index</a>
                </button>
              </div>
            </form>
          </div>
        </body>
      </html>
    );
  }
}

module.exports = Created;
