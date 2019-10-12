var React = require('react');

class EditRecipes extends React.Component {
    render() {
        return (

        <html>
        <body>
            <div>
                <h1>Updated YummyRecipes</h1>
                <form method="POST" action={"/recipes/" + this.props.index + "?_method=PUT"}>
                    <p> Recipes Title</p>
                    <input name="title" value ={this.props.title}/>
                    <p> Recipes Ingredients </p>
                    <input name="ingredients" value ={this.props.ingredients}/>
                    <p> Recipes Instructions</p>
                    <input name="Instructions" value= {this.props.instructions}/>
                    <br/>
                    <input type="submit"/>
                </form>
            </div>
        </body>
        </html>
        );

    }
}

module.exports = EditRecipes;