var React = require('react');
var Template = require('./template')
var NavHead = require('./navHead')

class Home extends React.Component {
    render() {
        return (
                <html>
                    <Template />
                    <body>
                        <div className="container">
                            <NavHead />
                            <h1>Welcome to Sam's Recipes</h1>
                        </div>
                    </body>
                </html>
        );
    }
}

module.exports = Home;