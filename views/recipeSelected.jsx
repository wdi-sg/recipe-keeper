var React = require('react');
var Head = require('./head.jsx');
var Header = require('./header.jsx');
var Nav = require('./nav.jsx');
var Footer = require('./footer.jsx');
var Scripts = require('./scripts.jsx');

class recipeSelected extends React.Component {

    render() {
        const ingredients = this.props.Ingredients.map(number => {
            return (
                <div>{number.Name}, {number.Amount}, {number.Notes}</div>
            )
        })



        return(
            <html>
                <Head/>
                <body>
                    <Header/>
                    <Nav/>
                    <div className="gparent">
                        <div className="row">
                            <div className="column">
                                <h4>{this.props.Title}</h4>
                            </div>
                        </div>
                        <div className="row">
                            <div className="columnleft">
                                <img src ={this.props.Image} className ="selectedImage"/>
                            </div>
                            <div className="columnright">
                                <div className="parent">
                                    <h3>Ingredients</h3>
                                    <p>{ingredients}</p>
                                </div>
                                <div className="parent">
                                    <h3>Instructions</h3>
                                    <p>{this.props.Instructions}</p>
                                </div>
                            </div>
                        </div>
                        <div className="action clearfix ">
                            <a href={'/recipes/' + this.props.Id + '/edit'} className = "edit">
                                <input type="submit" value="Edit" className="button"/>
                            </a>
                            <form method='POST' action={'/recipes/'+ this.props.id+ '?_method=delete'}>
                                <input type="submit" value="Delete" className="button"/>
                            </form>
                        </div>
                    </div>
                    <Footer/>
                    <Scripts/>
                </body>
            </html>
        )

    }

}

module.exports = recipeSelected;