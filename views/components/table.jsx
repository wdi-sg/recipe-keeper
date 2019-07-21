var React = require('react');


class Table extends React.Component {
  render() {
    const listOfRecipes = this.props.recipe.map(item=>{
        let index = this.props.recipe.indexOf(item) + 1;
        let url = '/recipes/'+(index);
        console.log(item.utensils.length)
        if(item.utensils.length >=1){
            var listOfUtensils = item.utensils.map(utensils=>{
                return <li>{utensils}</li>
            })
        }else {
            var listOfUtensils = "-";
        }

        if(item.seasonings.length >=1){
            var listOfSeasonings = item.seasonings.map(seasonings=>{
                return <li>{seasonings}</li>
            })
        }else {
            var listOfSeasonings = "-";
        }

        if(item.ingredients.length >=1){
            var listOfIngredients = item.ingredients.map(ingredients=>{
                return <li>{ingredients}</li>
            })
        }else {
            var listOfIngredients = "-";
        }


        return <tr className="table-light">
                <td><a href={url}>{item.title}</a></td>
                <td>{listOfUtensils}</td>
                <td>{listOfSeasonings}</td>
                <td>{listOfIngredients}</td>
                </tr>
    })

    return (
        <table className="table table-hover table-bordered">
            <thead>
                <tr className="bg-success text-white">
                    <th>Dish Name</th>
                    <th>Utensils</th>
                    <th>Seasonings</th>
                    <th>Ingredients</th>
                </tr>
                {listOfRecipes}
            </thead>
        </table>
    );
  }
}

module.exports = Table;