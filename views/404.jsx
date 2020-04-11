const React = require('react');
const head = require('./head');
const header = require('./header');

class StatusNotFound extends React.Component {

    render() {
        return (
            <html>
            {head()}
            <body>
                {header()}
                <h1>Page Not Found</h1>
            </body>
            </html>
        );
    }
}

module.exports = StatusNotFound;