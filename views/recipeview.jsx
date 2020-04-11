const React = require('react');

// recipe
// {
//   name: 'SEI Homework',
//   ingredients: {
//     '1': { ing: 'Iced coffee', qty: '3 cups' },
//     '2': { ing: 'Spotify', qty: '1' },
//     '3': { ing: 'console.log()', qty: "really a lot more than you'd think" },
//     '4': { ing: 'StackOverflow', qty: 'as necessary' }
//   },
//   instructions: '1. Make coffee\r\n' +
//     '2. Get some music going\r\n' +
//     '3. Code\r\n' +
//     '4. Debug\r\n' +
//     '5. Repeat until done.'
// }

// edit link
// delete link

const Ingredients = (recipe) => {
  let ingredients = (recipe.recipe.ingredients);
  return (
    <>
      { Object.keys(ingredients).map((id) => {
        return (
          <div className="row justify-content-center" key={id}>
            <div className="col-3">
              <span className="h6 text-right">{ingredients[id].ing}</span>
            </div>
            <div className="col-3">
              <span className="h6 text-left">{ingredients[id].qty}</span>
            </div>
          </div>
        )
      })}
    </>
  )
};

class RecipeView extends React.Component {
  render() {
    let id = this.props.id;
    let recipe = this.props.recipe;

    let editLink = `/recipes/${id}/edit`;
    let deleteLink = `/recipes/${id}?_method=delete`;

    return (
      <html>
        <head>
          <link rel="stylesheet"
                href="../static/bootstrap.min.css"
                />
        </head>

        <body>

          <div className="container text-center">
            <div className="row">
              <div className="col my-3">
                <h1 className="text-success">{recipe.name}</h1>
              </div>
            </div>

            <div className="row">
              <div className="col">
                <h5 className="text-success my-3">Ingredients</h5>
              </div>
            </div>

            <Ingredients recipe={this.props.recipe} />

            <div className="row">
              <div className="col">
                <h5 className="text-success my-3">Instructions</h5>
              </div>
            </div>

            <div className="row">
              <div className="col">
                {
                  recipe.instructions.split("\r\n").map((line, key) => {
                    return (
                        <span key={key} className="h6">{line}<br /></span>
                    );
                  })
                }
              </div>
            </div>

            <div className="row justify-content-center my-5">
              <div className="col-3">
                <a href={editLink}
                   className="btn btn-small btn-outline-success btn-block">
                  Edit
                </a>
              </div>
              <div className="col-3">
                <form method="post" action={deleteLink}>
                  <button type="submit"
                          className="btn btn-small btn-outline-success btn-block">
                    Delete
                  </button>
                </form>
              </div>
            </div>

        </div>
        </body>
        </html>
    );
  }
}

module.exports = RecipeView;
