var React = require('react');
var DefaultLayout = require('./layouts/default');
var Table = require('./components/table')

class Selective extends React.Component {
  render() {
     const listOfRecipes = this.props.recipe.map(item=>{
        let index = this.props.ori.indexOf(item) +1;
        let url = '/recipes/'+index;
        return <li><a href={url}>{item.title}</a></li>
    })
    return (
      <DefaultLayout title={this.props.title}>
            <table className="table table-bordered table-hover table-edit">
                <tr>
                    <th className="bg-success">Dishes that uses: {this.props.title}</th>
                </tr>
                <tr>
                    <td>{listOfRecipes}</td>
                </tr>

            </table>

      </DefaultLayout>
    );
  }

}

module.exports = Selective;