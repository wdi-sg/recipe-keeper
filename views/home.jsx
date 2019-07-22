var React = require('react');
// var DefaultLayout = require('./layouts/default');

class Home extends React.Component {
    render() {
        return (
            <html>
                <div className="row">
                    <div>
                        <h1>RECIPES!!!</h1>
                    </div>
                    <div>
                        <a href="../recipes/new" className="btn btn-primary">Add new recipe</a>
                    </div>
                </div>
            </html>
        );
    }
}

module.exports = Home;