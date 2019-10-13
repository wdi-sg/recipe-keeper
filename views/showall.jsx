var React = require('react');
var DefaultLayout = require('./layouts/default');

class ShowAll extends React.Component {
   render() {

        let style = {
            display: "inline-block",
            margin: "2rem",
            "text-align": "center"
        }
        let style2 = {
            "text-decoration": "none"
        }

        const allRecipes = this.props.recipeobj.recipes.map( (recipes, index) => {
          console.log(recipes)
            return (
                <li style={style}><a style={style2} href={"/recipes/"+index} className="list-group-item list-group-item-action list-group-item-primary">{recipes.recipeTitle}</a>
                <br/>
                <a href={"/recipes/"+index+"/edit"} className="btn btn-sm btn-outline-info m-1">Edit</a>
                <a href={"/recipes/"+index+"/delete"} className="btn btn-sm btn-outline-danger m-1">Delete</a>
                </li>
                )

        })
        return (

          <DefaultLayout pageTitle={this.props.pageTitle}>



                  { this.props.warning }
                        <ul>
                        {allRecipes}
                        </ul>


          </DefaultLayout>
        )
    }
}


module.exports = ShowAll;