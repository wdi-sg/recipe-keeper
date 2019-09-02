var React = require("react");
var DefaultLayout = require('./default');

class Ingredients extends React.Component {
    render() {
        console.log("ingredients here: " +this.props);
        let ingredientList = this.props.ingredients.map(item => {
            return (
                <li>{item.name}</li>)
            
        })
        console.log("ingredients here: " +this.props);
        return (
            <DefaultLayout>
            <div>
                <ul>
                    <li>{ingredientList}</li>
                </ul>
                
            </div>
            </DefaultLayout>
        )
    }
}

module.exports = Ingredients