var React = require('react');
var DefaultLayout = require('./layouts/default');

class recipeNew extends React.Component {

    render() {
        const ingredients = this.props.number.map(number => {
            return  <div className ="ingredients">
                        <label>{number}:</label>
                        <br/>
                        <textarea name={"Name"+ number} cols="50" rows="1" maxLength="50" className="form-control"></textarea>
                        <span className="text-muted">Please input name. E.g. Chicken</span>
                        <br/>
                        <textarea name={"Amount"+ number} cols="50" rows="1" maxLength="50" className="form-control"></textarea>
                        <span className="text-muted"> Please input amount. E.g. 1</span>
                        <br/>
                        <textarea name={"Notes"+ number} cols="50" rows="1" maxLength="50" className="form-control"></textarea>
                        <span className="text-muted"> Please input notes. E.g. De-boned</span>
                        <br/><br/>
                    </div>
    })

        return (
           <DefaultLayout>
                    <h5 class="h5">Fill up the form below to contribute a new recipe</h5>
                    <form method='POST' action='/recipes'>
                        <div className="form-group">
                            <h3>Title</h3>
                                <textarea name="Title" cols="50" rows="1" maxLength="50" className="form-control"></textarea>
                                <span className="text-muted"> E.g. Boiled Chicken</span>
                                <br/>
                        </div>
                        <div className="form-group">
                            <h3>Image</h3>
                                <textarea name="Image" cols="50" rows="3" maxLength="150" className="form-control"></textarea>
                                <span className="text-muted"> Please input url</span>
                                <br/>
                        </div>
                        <div className="form-group">
                            <h3>Ingredients</h3>
                            {ingredients}
                        </div>
                        <div className="form-group">
                            <h3>Instructions</h3>
                                <textarea name="Instructions" cols="50" rows="15" maxLength="750" className="form-control"></textarea><br/>
                        </div>
                        <input type="submit" value="Submit" className="btn btn-primary text"/>
                    </form>
           </DefaultLayout>
        )

    }

}

module.exports = recipeNew;