var React = require('react');
var DefaultLayout = require('./layouts/default');

class Ingredients extends React.Component {
  render() {
    let ingredientElements = this.props.data.map( (o) => {
        return <li>{ o["amount"] } { o["name"] }, { o["notes"] }</li>
    });

    return (
        <ul>
            { ingredientElements }
        </ul>
    );
  }
}

class Delete extends React.Component {
  render() {

    let formAttribute = `/recipes/${this.props.id}?_method=DELETE`;

    return (
            <DefaultLayout title= { `Delete Recipe - ${ this.props.title }` }>
                <form className="delete" method="POST" action={ formAttribute }>
                    <div>
                        <div>Ingredients:</div>
                        <Ingredients data= {this.props.ingredients}/>
                    </div>

                    <div>
                        <div>Instructions:</div>
                        <ol>
                            <li>{ this.props.instructions }</li>
                        </ol>
                    </div>
                    <input className="btn btn-danger" type="submit" value="Delete"/>
                </form>
            </DefaultLayout>
    );
  }
}

module.exports = Delete;