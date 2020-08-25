const React = require('react')

class IndivRecipe extends React.Component {
    render() {
        let {title, ingredients, instructions, index} = this.props
        let ingredientsList = ingredients.split(",")
        let instructionsList = instructions.split(".")
        instructionsList.pop()

        let ingredientsHTML = ingredientsList.map((item)=>{
            return <li>{item}</li>
        })

        let instructionsHTML = instructionsList.map((item)=>{
            return <li>{item}.</li>
        })

        let recipeEdit = "/recipes/"+index+"/edit"

        const divStyle = {
            margin: "20px",
            padding: "10px",
            fontFamily: "Arial"
        }
        const backButton = {
            margin: "10px 12px 10px 0",
            padding: "5px",
            fontSize: "15px"
        }

        return (
            <html>
                <body>
                  <div style={divStyle}>
                  <h1>{title}</h1>
                  <h4>Ingredients</h4>
                  <ul>
                  {ingredientsHTML}
                  </ul>
                  <h4>Steps</h4>
                  <ol>
                  {instructionsHTML}
                  </ol>
                  <button style={backButton}><a href={recipeEdit}>Edit/delete this recipe</a></button>
                  <button style={backButton}><a href="/recipes/">Back to homepage</a></button>


                  </div>
                </body>
            </html>

            )
    }
}


module.exports = IndivRecipe;