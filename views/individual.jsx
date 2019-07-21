var React = require('react');
var DefaultLayout = require('./layouts/default');


class Individual extends React.Component {
  render() {
    let item = this.props.item
    let editUrl = '/recipes/'+this.props.id+'/edit';
    let deleteUrl = '/recipes/'+this.props.id+'/delete';
    return (
      <DefaultLayout title={this.props.title}>
      <table className="table table-bordered table-hover individual-data" style={{backgroundColor:"white"}}>
            <tr>
                <th scope="row">Dish Name</th>
                <td>{item.title}</td>
            </tr>
            <tr>
                <th scope="row">Utensils</th>
                <td>{item.utensils.join(", ")}</td>
            </tr>
            <tr>
                <th scope="row">Seasonings</th>
                <td>{item.seasonings.join(", ")}</td>
            </tr>
            <tr>
                <th scope="row">Ingredients</th>
                <td>{item.ingredients.join(", ")}</td>
            </tr>
      </table>
      <div className="choices-container">
          <form className="choices"action={editUrl}>
              <input type="submit" value="Edit"/>
          </form>
          <form className="choices"action={deleteUrl}>
              <input type="submit" value="Delete"/>
          </form>
      </div>



      </DefaultLayout>
    );
  }
}

module.exports = Individual;