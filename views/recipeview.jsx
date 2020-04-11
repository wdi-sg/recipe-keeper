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

class RecipeView extends React.Component {
  render() {
    let id = this.props.id
    let recipe = this.props.recipe;
    console.log("view", id, recipe);
    return (
      <html>
        <head>
          <link rel="stylesheet"
                href="../static/bootstrap.min.css"
                />
        </head>

        <body>
          <div className="container">
          </div>
        </body>
      </html>
    );
  }
}

module.exports = RecipeView;
