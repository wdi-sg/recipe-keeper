var React = require("react");

class Recipe extends React.Component {

    render() {
        return (
            <div>
                <h3>{this.props.title}</h3>
                <h3>{this.props.ingredients}</h3>
                <h3>{this.props.instructions}</h3>
            </div>
        )
    }
}
module.exports = Recipe;