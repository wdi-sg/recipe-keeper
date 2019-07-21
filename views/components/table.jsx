var React = require('react');


class Table extends React.Component {
  render() {
    const listOfRecipes = this.props.recipe.map(item=>{
        let index = this.props.recipe.indexOf(item) + 1;
        let url = '/recipes/'+(index);
        if(item.utensils.length >=1){
            var listOfUtensils = item.utensils.map(utensils=>{
                let url = '/recipes?something='+utensils
                return <li><a href={url}>{utensils}</a></li>
            })
        }else {
            var listOfUtensils = "-";
        }

        if(item.seasonings.length >=1){

            var listOfSeasonings = item.seasonings.map(seasonings=>{
                let url = '/recipes?something='+seasonings
                return <li><a href={url}>{seasonings}</a></li>
            })
        }else {
            var listOfSeasonings = "-";
        }

        if(item.ingredients.length >=1){

            var listOfIngredients = item.ingredients.map(ingredients=>{
                let url = '/recipes?something='+ingredients
                return <li><a href={url}>{ingredients}</a></li>
            })
        }else {
            var listOfIngredients = "-";
        }


        return <tr>
                <td><a href={url}>{item.title}</a></td>
                <td>{listOfUtensils}</td>
                <td>{listOfSeasonings}</td>
                <td>{listOfIngredients}</td>
                </tr>
    })

    return (
        <table className="table table-hover table-bordered table-edit">
            <thead>
                <tr className="bg-success text-white">
                    <th>Dish Name</th>
                    <th>Utensils</th>
                    <th>Seasonings</th>
                    <th>Ingredients</th>
                </tr>

            </thead>
            <tbody>
                {listOfRecipes}
            </tbody>
        </table>
    );
  }
}

module.exports = Table;