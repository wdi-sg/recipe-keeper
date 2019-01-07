var React = require('react');

class HomePage extends React.Component {

  render() {
    return (
            <html>
            <head>
            </head>
            <link rel="stylesheet" href="/style-homepage.css"/>
            <body>
                <h1> Welcome to the Recipe List </h1>
                <div className="nav">
                    <a href="/recipes"> Search for all recipe </a>
                    <a href="/recipes/new"> Create New Recipe </a>
                    <a href="/recipes/delete"> Delete A Recipe </a>
                    <a href="/recipes/update"> Update A Recipe </a>
                </div>
                <div className="firstContent">
                    <div id="image1">
                        <p className="pasta"> Aglio Olio </p>
                    </div>
                    <div id="image2">
                        <p className="pasta"> Cacio e Pepe </p>
                    </div>
                    <div id="image3">
                        <p className="pasta"> Smoked Salmon </p>
                    </div>
                </div>
                <div className="secondContent">
                    <div id="image4">
                        <p className="pasta"> Fettuccine Alfredo </p>
                    </div>
                    <div id="image5">
                        <p className="pasta"> Beef Stroganoff </p>
                    </div>
                    <div id="image6">
                        <p className="pasta"> Pasta Frutti di mare </p>
                    </div>
                </div>
            </body>
            </html>
    );
  }
}

module.exports = HomePage;