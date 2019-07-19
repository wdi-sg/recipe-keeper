var React = require('react');

class Individual extends React.Component{
    render(){
        let urlEdit = "/recipe/"+this.props.recipe.id+"/edit";
        let urlDelete = "/recipe/"+this.props.recipe.id+"/delete";
        let url = "/recipe";
        return(
            <html>
                <body>
                    <h1>Name of Dish: {this.props.recipe.name}</h1>
                        <h2>Ingredients</h2>
                        <p>{this.props.recipe.ingredients}</p>
                        <h2>Instruction</h2>
                        <p>{this.props.recipe.instructions}</p>
                </body>
            </html>
        );
    };
};

module.exports = Individual;