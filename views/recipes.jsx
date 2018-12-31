var React = require('react');
var Default = require('./default');

class Recipes extends React.Component{
    render(){
        let recipeCards = this.props.recipes.map(recipe => {
            
            let descriptionText = recipe.description;
            // descriptionText.length >= 100 ? descriptionText = recipe.description.substring(0,100) + "..." : 0;
            
            let recipeLink = '/recipes/' + recipe.id;

            return (
                <div className="col-sm-12 col-md-6 col-lg-4 card-wrapper" style={{margin: '13px 0px 13px 0px'}} id={"recipe" + recipe.id}>
                    <a href={recipeLink}>
                        <div className="card">
                            <img src={recipe.photo} className="card-img-top" alt={recipe.name}/>
                            <div className="card-body">
                                <h5 className="card-title">{recipe.name}</h5>
                                <p className="card-text block-with-text">{descriptionText}</p>
                            </div>
                            <div className="card-footer">
                                <small>Recipe by: {recipe.contributor}</small>
                            </div>
                        </div>
                    </a>
                </div>
            )
        });
        return (
            <Default>
                <div className="box">
                    {recipeCards}
                </div>
            </Default>
        )
    }
}

module.exports = Recipes;