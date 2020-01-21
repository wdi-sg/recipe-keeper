const React = require('react');
const PropTypes = require('prop-types');
const DefaultLayout = require('./layouts/default');
const DateParser = require('./components/dateparser');
const MultiLineStringToList = require('./components/multilinestringtolist');

class Recipe extends React.Component {
    render() {

        const actionURL = `/recipes/${this.props.recipeId}?_method=delete`;
        const editURL = `/recipes/${this.props.recipeId}/edit`;
        const dateCreated = this.props.recipe.dateCreated;
        const dateUpdated = this.props.recipe.dateUpdated;

        return (<DefaultLayout>
            <div>
                <h3>{this.props.message}</h3>
                <h1>{this.props.recipe.title}</h1>
                <small className="text-muted">Date Created: <DateParser date={dateCreated}/> - Last Updated: <DateParser date={dateUpdated}/></small>
                <h3>Ingredients:</h3>
                <MultiLineStringToList string={this.props.recipe.ingredients}/>
                <h3>Method:</h3>
                <MultiLineStringToList isOrdered="true" string={this.props.recipe.method}/>
                <div className="row">
                    <div className="col-sm-3">
                        <a href={editURL} type="button" className="btn btn-primary">
                            Edit this recipe
                        </a>
                    </div>
                    <div className="col-sm-9">
                        <form action={actionURL} method="POST">
                            <button type="submit" className="btn btn-danger">
                                Delete this recipe
                            </button>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="confirmCheck" required="required"/>
                                <label className="form-check-label" htmlFor="confirmCheck">
                                    Confirm deletion.
                                </label>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </DefaultLayout>);
    }
};

module.exports = Recipe;
