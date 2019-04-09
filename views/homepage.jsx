var React = require('react');
var Header = require('./header');

class HomePage extends React.Component {
    render() {
    return(
    <html>
        <body>
            <div>
            <h1> The Recipe Rolodex!</h1>
            <p>Let's create something sizzling {this.props.name}</p>
            </div>
        </body>
    </html>
    );
    }
}

module.exports = HomePage;