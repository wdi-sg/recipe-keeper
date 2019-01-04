var React = require('react');
var Head = require('./head.jsx');
var Header = require('./header.jsx');
var Nav = require('./nav.jsx');
var Footer = require('./footer.jsx');
var Scripts = require('./scripts.jsx');

class recipeNew extends React.Component {

    render() {
        const ingredients = this.props.number.map(number => {
            return  <div>
                        <label>{number}:</label>
                        <br/>
                        <textarea name={"Name"+ number} cols="50" rows="1" maxLength="50"></textarea>
                        <span className="example"> Please input name. E.g. Chicken</span>
                        <br/>
                        <textarea name={"Amount"+ number} cols="50" rows="1" maxLength="50"></textarea>
                        <span className="example"> Please input amount. E.g. 1</span>
                        <br/>
                        <textarea name={"Notes"+ number} cols="50" rows="1" maxLength="50"></textarea>
                        <span className="example"> Please input notes. E.g. De-boned</span>
                        <br/><br/>
                    </div>
    })

        return (
            <html>
                <Head/>
                <body>
                    <Header/>
                    <Nav/>
                    <h4>Fill up the form below to contribute a new recipe</h4>
                    <form method='POST' action='/recipes'>
                        <div>
                            <h3>Title</h3>
                                <textarea name="Title" cols="50" rows="1" maxLength="50"></textarea>
                                <span className="example"> E.g. Boiled Chicken</span>
                                <br/>
                        </div>
                        <div>
                            <h3>Image</h3>
                                <textarea name="Image" cols="50" rows="2" maxLength="100"></textarea>
                                <span className="example"> Please input url</span>
                                <br/>
                        </div>
                        <div>
                            <h3>Ingredients</h3>
                            {ingredients}
                        </div>
                        <div>
                            <h3>Instructions</h3>
                                <textarea name="Instructions" cols="50" rows="15" maxLength="750"></textarea><br/>
                        </div>
                        <input type="submit" value="Submit" className="button"/>
                    </form>
                    <Footer/>
                    <Scripts/>
                </body>
            </html>
        )

    }

}

module.exports = recipeNew;