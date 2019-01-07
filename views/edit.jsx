var React = require('react');

class editForm extends React.Component {

    render() {
        // let formAction = '/recipes/' + this.props.id + '?_method=PUT';
        // let removeAction = '/recipes/' + this.props.id + '?_method=delete';

        return (
            <React.Fragment>
            <form method='POST' action={'/recipes/' + this.props.id + '?_method=PUT'}>
                <input type='text' name='name' value={ this.props.name }/><br/>
                <input type='text' name='ingredients' value={ this.props.ingredients }/><br/>
                <input type='text' name='instructions' value={ this.props.instructions }/><br/>
                <input type='submit'/>
            </form>
            <form method='POST' action={'/recipes/' + this.props.id + '?_method=delete'}>
                <input name="id" type="hidden" value={ this.props.id }/>
                <input type="submit" value="delete this"/>
            </form>
            </React.Fragment>
          );

    }
}

module.exports = editForm;

        // <form method="GET" action={"/recipes/" + this.props.recipe.id + "/edit"}>
        //     <input type="submit" value="Edit Recipe"/>
        // </form>
        // <form method="POST" action={"/recipes/" + this.props.recipe.id + "?_method=DELETE"}>
        //     <input type="submit" value="Delete Recipe"/>
        // </form>
