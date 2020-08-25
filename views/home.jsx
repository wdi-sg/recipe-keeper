const React = require('react')

class Home extends React.Component {
    render() {
        let recipeList = this.props.recipes
        let recipeHTML = recipeList.map((item, index)=>{
            let recipeURL = "/recipes/" + index
            return <li><a href={recipeURL} style={{color: "black"}}>{item.title.trim()}</a></li>
        })

        const divStyle = {
            margin: "20px",
            padding: "10px",
            fontFamily: "Arial",
            color: "black"
        }

        const buttonStyle = {
            margin: "0 5px",
            padding: "5px 8px"
        }

        return (
            <html>
                <body>
                  <div style={divStyle}>
                    <h1>All Recipes</h1>
                    <ul>
                    {recipeHTML}
                    </ul>
                    <a href="/recipes/new"><button style={buttonStyle}>Add a new recipe</button></a>
                    <a href="/ingredients"><button style={buttonStyle}>Browse recipes by ingredients</button></a>

                  </div>
                </body>
            </html>

            )
    }
}


module.exports = Home;