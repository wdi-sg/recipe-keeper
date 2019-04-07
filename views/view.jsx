var React = require('react');
var DefaultLayout = require('./layouts/default');

class View extends React.Component {
  render() {

    return (
            <DefaultLayout title= { `View Recipe - ${ this.props.title }` }>
                <div className="recipe">
                    <img className="recipeImg" src= { this.props.img }/>

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
                    <br/>
                    <a className="btn btn-secondary" href= { `/recipes/${ this.props.id }/edit` }>Edit Recipe</a>
                    <a className="btn btn-danger" href= { `/recipes/${ this.props.id }/delete` }>Delete Recipe</a>
                </div>
            </DefaultLayout>
    );
  }
}

module.exports = View;