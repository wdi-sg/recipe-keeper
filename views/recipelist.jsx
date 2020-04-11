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

class RecipeList extends React.Component {
  render() {
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
            YEAH THIS IS A HOMEPAGE I SWEAR
          </div>
        </body>
      </html>
    );
  }
}

module.exports = RecipeList;
