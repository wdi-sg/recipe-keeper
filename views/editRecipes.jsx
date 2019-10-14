var React = require('react');

class editRecipes extends React.Component {
    render() {
        return (

        <html>
        <body>
            <div>
                <h1>Editing Yummy Recipes for Improvement</h1>
                <form method="POST" name= "create" action={"/recipes/" + this.props.id + "?_method=put"}>
                    <p> Recipes Title</p>
                    <input name="title" defaultValue ={this.props.title}/>
                    <p> Recipes Ingredients </p>
                    <input name="ingredients" defaultValue ={this.props.ingredients}/>
                    <p> Recipes Instructions</p>
                    <input name="Instructions" defaultValue= {this.props.instructions}/>
                    <br/>
                    <input type="submit"/>
                </form>
            </div>
        </body>
        </html>
        );

    }
}

module.exports = editRecipes;