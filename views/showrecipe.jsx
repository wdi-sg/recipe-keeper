var React = require('react');


class Showrecipe extends React.Component {
    render() {
        return (
            <body>
              <div>
                <h3>Recipe that you looked for: </h3>
                <p>
                TITLE: {this.props.title}
                <br/>
                INGREDIENTS: {this.props.ingredients}
                <br/>
                INSTRUCTIONS: {this.props.instructions}
                </p>
              </div>
            </body>
            )
    }
}

module.exports = Showrecipe;