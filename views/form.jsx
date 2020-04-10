const React = require('react')

class Form extends React.Component {

      render() {

            return (
              <html lang="en" dir="ltr">
                <head>
                  <link
                    rel="stylesheet"
                    href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
                    integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
                    crossOrigin="anonymous"
                  />
                </head>

                <body style={{ textAlign: "center" }}>
                  <div className="jumbotron">
                    <h1>Submit a Recipe</h1>
                    <a href="/">
                      <button className="btn btn-success">Back to Home</button>
                    </a>
                  </div>
                  <p style={{ color: "red" }}>{this.props.error}</p>
                  <form method="POST" action="/recipes">
                    <br />
                    <input
                      style={{ margin: "10px" }}
                      type="text"
                      name="title"
                      placeholder="Title"
                    />
                    <br />
                    <input
                      style={{ margin: "10px" }}
                      type="text"
                      name="ingredients"
                      placeholder="Ingredients"
                    />
                    <br />
                    <input
                      style={{ margin: "10px" }}
                      type="text"
                      name="instructions"
                      placeholder="Instructions"
                    />
                    <br />
                    <input
                      style={{ margin: "10px" }}
                      className="btn btn-primary"
                      type="submit"
                      value="Submit"
                    />
                  </form>
                </body>
              </html>
            );

      }

}

module.exports = Form;
