var React = require('react');

class DeleteRecipeResult extends React.Component {

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
                        <a href="/recipes/new"> Create New Recipe </a>
                        <a href="/recipes/delete" id="currentPage"> Delete A Recipe </a>
                        <a href="/recipes/update"> Update A Recipe </a>
                    </div>
                    <div className="firstContent">
                        <h2> {this.props.title} has been successfully removed from the list of recipe. </h2>
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

module.exports = DeleteRecipeResult;