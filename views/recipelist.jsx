var React = require('react');

// recipes
// {
//   '1': {
//     name: 'SEI Homework',
//     ingredients: { '1': [Object], '2': [Object], '3': [Object], '4': [Object] },
//     instructions: '1. Make coffee\r\n' +
//       '2. Get some music going\r\n' +
//       '3. Code\r\n' +
//       '4. Debug\r\n' +
//       '5. Repeat until done.'
//   },
//   '2': {
//     name: 'Chicken Bits',
//     ingredients: { '1': [Object], '2': [Object], '3': [Object] },
//     instructions: 'Marinate, coat, fry.\r\n\r\nEat.\r\nShare, if you want.\r\nRepeat.'
//   },
//   '3': {
//     name: 'Fish & Chips',
//     ingredients: { '1': [Object], '2': [Object], '3': [Object] },
//     instructions: '1. Attempt to deep fry in a domestic setting.\r\n' +
//       '2. Wish you owned a proper deep fryer.\r\n' +
//       '3. Order in.'
//   }
// }

// link to individual
// link to new recipe

const Recipes = (obj) => {
  let recipes = obj.recipes;
  console.log(recipes);

  return (
    <>
      { Object.keys(recipes).map( id => {
        let viewLink = `/recipes/${id}`;
        let editLink = `/recipes/${id}/edit`;

        return(
          <React.Fragment key={id}>
            <li className="list-group-item">
              <div className="row text-center my-3">
                <div className="col-6">
                  <a href={viewLink} className="h5 text-success">{recipes[id].name}</a>
                </div>
                <div className="col-6">
                  <a href={editLink} className="h5 text-success">Edit</a>
                </div>
              </div>
            </li>
          </React.Fragment>
        )
      })}
    </>
  );
}

class RecipeList extends React.Component {
  render () {
    let recipes = this.props.recipes;
    console.log("list", recipes);

    return (
      <html>
        <head>
          <link rel="stylesheet"
                href="../static/bootstrap.min.css"
                />
        </head>

        <body>
          <div className="container">

            <div className="row">
              <div className="col text-center my-3">
                <h1 className="text-success">Recipes</h1>
              </div>
            </div>

            <div className="row">
              <div className="col">
                <ul className="list-group">
                    <Recipes recipes={recipes} />
                </ul>
              </div>
            </div>

            <div className="row my-3">
              <div className="col">
                <a href="/recipes/new/"
                   className="btn btn-success btn-block btn-lg">
                  Add a New Recipe
                </a>
              </div>
            </div>

          </div>
        </body>
      </html>
    );
  }
}

module.exports = RecipeList;
