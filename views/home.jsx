const React = require('react');

class Home extends React.Component{
    render(){



        const title = this.props.recipeList.map((item,i) => {
            console.log(item.id)

                return <li key = {i}><a href = {`/recipes/${item.id}`}> {item.title}</a> </li>
            })


        console.log(this.props.recipe)

        return(
            <html>
                <body>
                  <div>
                    <marquee behavior = "alternate"><h1>INDEX OF RECIPES</h1></marquee>
                    <ol>
                        {title}
                    </ol>
                  </div>

                  <form action="/recipes/new" method="get" id="add">
                     <button type = "add">
                        Add a recipe
                    </button>
                    </form>

                </body>
              </html>
            )
    }
}
module.exports = Home;