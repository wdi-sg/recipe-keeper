const React = require('react');
const LayoutContainer = require('./layout.jsx');

class App extends React.Component {
    render() {
        return(
            <LayoutContainer>
                <div>
                    <h1>RECIPE</h1>
                    <p>
                        name: {this.props.name} <br/>
                        ingredient: {this.props.ingredient} <br/>
                        instructions: {this.props.instructions} <br/>
                    </p>
                    Edit RECIPE
                    <form method="POST" action="recipes/?_method=put">
                        <label>NAME</label>
                        <input type="text" placeholder={this.props.name} name="name"></input>
                        <label>ingredient</label>
                        <input type="text" placeholder={this.props.ingredient} name="ingredient"></input>
                        <label>instructions</label>
                        <input type="text" placeholder={this.props.instructions} name="instructions"></input>
                        <input type="submit" value="edit"></input>
                    </form>
                </div>
            </LayoutContainer>
        )
    }
}

module.exports = App;