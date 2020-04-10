const React = require('react');

class Singlerecipe extends React.Component{
    render(){
        // CSS things
        const title = {"text-align" : "center"};

        const image = {"text-align" : "center"};


        // Javascript things
        const recipeObject = this.props.singleRecipe

        const recipeImage = <img src={recipeObject.img}></img>

        const recipeIngredients = recipeObject.ingredients.map(el => {
            return <li>{el}</li>
        })

        const recipeInstructions = <p>{recipeObject.instructions}</p>

        return(
            <html>
                <body>
                    <div>
                        <h1 style={title}>{recipeObject.title}</h1>
                    </div>
                    <div style={image}>
                        {recipeImage}
                    </div>
                    <div>
                        <div>
                            <ol>
                                {recipeIngredients}
                            </ol>
                        </div>
                        <div>
                            {recipeInstructions}
                        </div>
                    </div>
                </body>
            </html>
        )

    }
}

module.exports = Singlerecipe;