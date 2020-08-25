const React = require('react')

class Ingredients extends React.Component {
    render() {
        let recipeList = this.props.recipes

        //make list of all ingredients used
        let ingredientsList = []
        for(var i=0;i<recipeList.length;i++){
            let itemIngredients = recipeList[i].ingredients.toLowerCase().split(",")
            itemIngredients.forEach((item)=>{
                if(!ingredientsList.includes(item.trim())){
                    ingredientsList.push(item.trim())
                }
            })
        }

        //group items according to ingredients used
        let ingredientGroups = []
        ingredientsList.forEach((item)=>{
            let indIngredient = [item]
            for(var j=0;j<recipeList.length; j++){
                let lowerCaseIng = recipeList[j].ingredients.toLowerCase()
                if(lowerCaseIng.includes(item)){
                    let recipeObj = recipeList[j]
                    recipeObj.index = j
                    indIngredient.push(recipeObj)
                }
            }
            ingredientGroups.push(indIngredient)
        })

        //generate HTML elements based on components
        let ingredientsHTML = []
        ingredientGroups.forEach((item)=>{
            ingredientsHTML.push(<li style={{fontSize: "25px"}}>{item[0]}</li>)
            for(var k=1;k<item.length;k++){
                let recipeURL = "/recipes/" + item[k].index
                ingredientsHTML.push(<p><a href={recipeURL} style={{color: "black", fontSize: "15px"}}>{item[k].title}</a></p>)
            }

        })

        const divStyle = {
            margin: "20px",
            padding: "10px",
            fontFamily: "Arial",
            color: "black"
        }
        const backButton = {
            margin: "10px 0",
            padding: "5px",
            fontSize: "15px"
        }

        return (
            <html>
                <body>
                  <div style={divStyle}>
                    <h1>All Ingredients</h1>
                    <ul>
                    {ingredientsHTML}
                    </ul>
                    <button style={backButton}><a href="/recipes/">Back to Homepage</a></button>


                  </div>
                </body>
            </html>

            )
    }
}


module.exports = Ingredients;