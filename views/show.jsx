var React = require('react');

class Show extends React.Component {
    render() {
        return (
            <html>
                <body>
                <h1>{this.props.title}</h1>
                    <h2>
                        ID: {this.props.id}<br/>
                        Title: {this.props.title}<br/>
                        Ingredients: {this.props.ingredients}<br/>
                        Instructions: {this.props.instructions}<br/>
                    </h2>
                </body>
            </html>
        )
    }
}

module.exports = Show;