var React = require('react');

class CreateRecipeNotUpdated extends React.Component {

    render() {

    return (
            <html>
            <head>
            </head>
            <link rel="stylesheet" href="/style-createRecipeNotUpdated.css"/>
            <body>
                <div className="wrapper">
                    <div className="nav">
                        <h1> Welcome to Pasta Recipe </h1>
                        <a href="/recipes"> Search for all recipe </a>
                        <a href="/recipes/new" id="currentPage"> Create New Recipe </a>
                        <a href="/recipes/delete"> Delete A Recipe </a>
                        <a href="/recipes/update"> Update A Recipe </a>
                    </div>
                    <div className="firstContent">
                        <h2> {this.props.title} already exists. Please choose another title to create a new recipe. </h2>
                    </div>
                    <div className="footer">
                        <p>Copyright <span> &copy;</span> 2018 Lim Siew Leng</p>
                    </div>
                </div>
            </body>
            </html>
        );
    }
}

module.exports = CreateRecipeNotUpdated;