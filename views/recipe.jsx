var React = require('react');


class Show extends React.Component{
    render(){
        var bodyStyle = {
            backgroundColor : "#f7bd8d"
        }

        var divOneStyle = {
            margin: "50px 200px",
            textAlign : "center",
            border:"1px solid black"
        }

        var individualStyle = {
            display: "inline-block",
            borderRadius: "10px",
            margin :"10px 10px"
        }

        var imgStyle = {
            height:"150px",
            width:"150px",
            borderRadius:"10px"
        }

        var urlNew = "/recipe/new";
        var mapRecipeData = this.props.recipe.map(recipe=>{
            let urlIndividualRecipe = "/recipe/"+recipe.id;
            return(
                <div style ={individualStyle}>
                    <a href={urlIndividualRecipe}>
                        <img style={imgStyle} src={recipe.img}/>
                    </a>
                    <p>{recipe.name}</p>
                </div>
            );
        });

        return(
            <html>
                <body style={bodyStyle}>
                    <div style={divOneStyle}>
                        <h1>Recipe</h1>
                        <a href={urlNew}>Add new recipe</a>
                        <p>{mapRecipeData}</p>
                    </div>
                </body>
            </html>
        );
    };
};

module.exports = Show;