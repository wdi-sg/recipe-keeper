var React = require('react');
var DefaultLayout = require('./layouts/default');

class recipeSelected extends React.Component {

    render() {
        const ingredients = this.props.Ingredients.map(number => {
            return(
                <div> {number.Name} {number.Amount} {number.Notes}</div>
            )
        });



        return(
           <DefaultLayout>
                    <div className="gparent">
                        <div className="row">
                            <div className="col">
                                <h5 className="h5">{this.props.Title}</h5>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col columnleft">
                                <img src ={this.props.Image} className ="selectedImage"/>
                            </div>
                            <div className="col     columnright">
                                <div className="parent">
                                    <h3>Ingredients</h3>
                                    {ingredients}
                                </div>
                                <div className="parent">
                                    <h3>Instructions</h3>
                                    <p>{this.props.Instructions}</p>
                                </div>
                            </div>
                        </div>
                        <div className="action clearfix ">
                            <a href={'/recipes/' + this.props.Id + '/edit'} className = "edit">
                                <input type="submit" value="Edit" className="btn btn-primary"/>
                            </a>
                            <form method='POST' action={'/recipes/'+ this.props.id+ '?_method=delete'}>
                                <input type="submit" value="Delete" className="btn btn-primary"/>
                            </form>
                        </div>
                    </div>
           </DefaultLayout>
        )

    }

}

module.exports = recipeSelected;