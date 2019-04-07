var React = require('react');
var DefaultLayout = require('./layouts/default');

class Delete extends React.Component {
  render() {

    let formAttribute = `/recipes/${this.props.id}?_method=DELETE`;

    return (
            <DefaultLayout title= { `Delete Recipe - ${ this.props.title }` }>
                <form className="delete" method="POST" action={ formAttribute }>
                    <div>
                        <div>Category:</div>
                        <ul>
                            <li>{ this.props.category }</li>
                        </ul>
                    </div>

                    <div>
                        <div>Ingredients:</div>
                        <ul>
                            <li>{ this.props.ingredients }</li>
                        </ul>
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