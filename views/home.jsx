const React = require("React");

class Home extends React.Component {
    render() {
        let recipe = this.props.recipes.map(item => {
            return <div>
                <h1>{item.title}</h1>
                <p>Ingredients: {item.ingredients}</p>
                <p>Instructions: {item.instructions}</p>
            </div>
        });
        return (
            <div>
                {recipe}
            </div>
        )
    }
}

module.exports = Home;