const React = require('react');
const head = require('./head');

class StatusNotFound extends React.Component {

    render() {
        return (
            <html>
            {head()}
            <body>
                <h1>Page Not Found</h1>
            </body>
            </html>
        );
    }
}

module.exports = StatusNotFound;