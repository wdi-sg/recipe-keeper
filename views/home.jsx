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
                            <div className="">
                                <h1 className="">Welcome to Sam's Recipes</h1>
                            </div>
                        </div>
                    </body>
                </html>
        );
    }
}

module.exports = Home;