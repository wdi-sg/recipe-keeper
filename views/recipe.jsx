const React = require('react');
const head = require('./head');

class Recipe extends React.Component {

    render() {

        const ingredients = this.props.ingredients.map(ingredient => {
            return <div className="ingredient__el">
                        <li className="ingredient__item">{ingredient.name}</li>
                        <li className="ingredient__amount">{ingredient.amount}</li>
                    </div>

        })

        const instructions = this.props.instructions.map(instruction => {
            return <div className="instruction__el">
                        <li className="instructions__para">{instruction}</li>
                    </div>
        })

        const recipe = () => {
            return (
                <div className = "recipe__container">
                    <div className = "recipe__header">
                        {this.props.title}
                    </div>
                    <div className = "recipe__img">
                        <img src={this.props.img} />
                    </div>
                    <div className = "recipe__ingredients">
                        {ingredients}
                    </div>
                    <div className = "recipe__instructions">
                        {instructions}
                    </div>
                </div>
            )
        }


        return (
            <html>
            {head()}
            <body>
            {recipe()}
            </body>
            </html>
        );
    }
}

module.exports = Recipe;