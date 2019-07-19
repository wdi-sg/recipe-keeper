var React = require('react');
//////////////////PAGE STYLING HAPPENS HERE//////////////////
class Allrecipepage extends React.Component {

  render() {
    //code logic goes here
    return (
      <html>
        <link rel="stylesheet" type="text/css" href="/css/style.css"/>
        <header>
          <div>
            <h1>Bringing you delight in every meal you make!</h1>
          </div>
        </header>
        <body>
          <div id="main-image">
            <img id="recipe-header" src="/images/delicious-steak.jpg"/>
          </div>
          <div>
            {this.props.children}
          </div>

        </body>
      </html>
    );
  }
}

module.exports = Allrecipepage;

// <div>
//   <form action="/recipes" method="get">
//     <button type="submit">Back to list</button>
//   </form>
// </div>
