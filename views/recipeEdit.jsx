var React = require('react');
var Head = require('./head.jsx');
var Header = require('./header.jsx');
var Nav = require('./nav.jsx');
var Footer = require('./footer.jsx');
var Scripts = require('./scripts.jsx');

class recipeEdit extends React.Component {

    render() {
        const ingredients = this.props.ingredientsNum.map((ingredient,index) => {
            index = index+1;
            return(
                <div>
                        <label>{index}:</label>
                        <br/>
                        <textarea name={"Name"+ index} value={ingredient.Name} cols="50" rows="1" maxLength="50" className="form-control"></textarea>
                        <br/>
                        <textarea name={"Amount"+ index} value={ingredient.Amount} cols="50" rows="1" maxLength="50" className="form-control"></textarea>
                        <br/>
                        <textarea name={"Notes"+ index} value={ingredient.Notes} cols="50" rows="1" maxLength="50" className="form-control"></textarea>
                        <br/><br/>
                    </div>
            )
    })



        return(
            <html>
                <Head/>
                <body>
                    <Header/>
                    <Nav/>
                    <h5 className="h5">Edit Recipe</h5>
                    <form method='POST' action={'/recipes/'+ this.props.id+ '?_method=PUT'}>
                        <div className="form-group">
                            <h3>Title</h3>
                                <textarea name="Title" value={this.props.edit.Title} cols="50" rows="1" maxlength="50" className="form-control"></textarea>
                                <br/>
                        </div>
                        <div className="form-group">
                            <h3>Image</h3>
                                <textarea name="Image" value={this.props.edit.Image} cols="50" rows="2" maxlength="100" className="form-control"></textarea>
                                <br/>
                        </div>
                        <div className="form-group">
                            <h3>Ingredients</h3>
                            {ingredients}
                        </div>
                        <div className="form-group">
                            <h3>Instructions</h3>
                                <textarea name="Instructions" value={this.props.edit.Instructions} cols="50" rows="15" maxLength="750" className="form-control"></textarea><br/>
                        </div>
                        <input type="submit" value="Submit" className="btn btn-primary center-block"/>
                    </form>
                    <Footer/>
                    <Scripts/>
                </body>
            </html>


            )
    }
}

module.exports = recipeEdit;