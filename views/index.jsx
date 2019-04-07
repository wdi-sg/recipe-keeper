var React = require('react');

class Edit extends React.Component {
    render(){
        // this.props is {[{},{}]}
        const recipes = this.props.recipes.map( recipe => {
            return <tr>
                      <td>{ recipe.title }</td>
                      <td>{ recipe.ingredients }</td>
                      <td>{ recipe.instructions }</td>
                  </tr>;
        })
        return (
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Ingredients</th>
                        <th>Instructions</th>
                    </tr>
                </thead>
                <tbody>
                    { recipes }
                </tbody>
            </table>
        );
    }
}

module.exports = Edit;