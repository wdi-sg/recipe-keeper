var React = require('react');

class Individual extends React.Component{
    render(){

        var bodyStyle = {
            backgroundColor:"#f7bd8d"
        }

        var divOneStyle = {
            margin : "20px 200px",
            textAlign: "center",
        }

        var imgStyle = {
            height: "300px",
            width:"300px"
        }

        let urlEdit = "/recipe/"+this.props.recipe.id+"/edit";
        let urlDelete = "/recipe/"+this.props.recipe.id+"/delete";
        let url = "/recipe";
        return(
            <html>
                <body style={bodyStyle}>
                    <div style={divOneStyle}>
                        <img style = {imgStyle} src={this.props.recipe.img}/>
                            <h1>{this.props.recipe.name}</h1>
                            <h2>Ingredients</h2>
                            <p>{this.props.recipe.ingredients}</p>
                            <h2>Instruction</h2>
                            <p>{this.props.recipe.instructions}</p>
                            <a href={urlEdit}>Edit recipe</a>
                            <a href={urlDelete}>Delete recipe</a>
                            <a href={url}>Return home</a>
                    </div>
                </body>
            </html>
        );
    };
};

module.exports = Individual;