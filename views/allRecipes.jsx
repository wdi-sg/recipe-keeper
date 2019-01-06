var React = require('react');
var MainTemplate = require('./mainTemplate');

class AllRecipes extends React.Component {
    render() {

        var link =  "/recipes/"+ this.props.id;
        var recipeName = this.props.recipeName;
        var description = this.props.description;
        var img = this.props.imgLink;

        return (
            <MainTemplate title="All Recipes">
            <div className="allRecipes">
                
                <a href={link}><div className="eachRecipe">
                    <img className="eachRecipeImg" src={img}/>
                    <div className="eachRecipeDescription"><h5>{recipeName}</h5><h6>{description}</h6>
                    </div>

                </div></a>
                
            </div>
            </MainTemplate>
        )
    }
}

module.exports = AllRecipes;