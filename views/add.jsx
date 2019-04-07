var React = require('react');
var DefaultLayout = require('./layouts/default');

class Add extends React.Component {
  render() {

    return (
            <DefaultLayout title="Add a New Recipe">
                <form className="add" action="/recipes" method="POST">
                    <div>Recipe Title:</div>
                    <input className="form-control" name="title"/>
                    <br/>

                    <div>Ingredients:</div>
                    <textarea className="form-control" name="ingredients" rows="3"/>
                    <br/>

                    <div>Instructions:</div>
                    <textarea className="form-control" name="instructions" rows="3"/>
                    <br/>

                    <input className="btn btn-secondary" type="submit" value="Add new Recipe"/>
                </form>
            </DefaultLayout>
    );
  }
}

module.exports = Add;