var React = require('react');

class Delete extends React.Component{
    render(){
        var urlDelete = "/recipe/"+this.props.recipe.id+"?_method=DELETE";
        var url = "/recipe";
        return(
            <html>
                <body>
                    <h1>Name of Dish: {this.props.recipe.name}</h1>
                        <h2>Ingredients</h2>
                        <p>{this.props.recipe.ingredients}</p>
                        <h2>Instruction</h2>
                        <p>{this.props.recipe.instructions}</p>
                        <form method="POST" action={urlDelete}>
                        <input type="submit"/>
                        </form>
                        <a href={url}>Return home</a>
                </body>
            </html>
        );
    };
};

module.exports = Delete;