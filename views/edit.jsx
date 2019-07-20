var React = require('react');

class Edit extends React.Component{
    render(){
        var url = "/recipe/"+this.props.recipe.id + "?_method=PUT";
        var urlHome = "/recipe";
        return(
            <html>
                <body>
                    <h1>EDIT PAGE</h1>
                    <a href={urlHome}>Main page</a>
                    <div>
                        <form method="POST" action={url}>
                            <p>id</p>
                            <input name="id" readOnly = "readOnly" defaultValue={this.props.recipe.id}/>
                            <p>Recipe name</p>
                            <input name="name" defaultValue={this.props.recipe.name}/>
                            <p>Ingredients</p>
                            <input name="ingredients" defaultValue={this.props.recipe.ingredients}/>
                            <p>Instructions</p>
                            <input name="instructions" defaultValue={this.props.recipe.instructions}/>
                            <br />
                            <br />
                            <input type="submit"/>
                        </form>
                    </div>
                </body>
            </html>
        );
    };
};

module.exports = Edit;