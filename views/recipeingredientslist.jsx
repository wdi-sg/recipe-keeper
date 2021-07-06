var React = require('react');
var DefaultLayout = require('./recipecss');

class Recipeingredients extends React.Component{
    render(){
        return(
            <div>
                <ul>
                    <form method="GET" action={"/recipe/" + this.props.list.name + "/recipelist"}>
                        -<span> </span>{this.props.list.name}<span> </span>
                        {this.props.list.amount}<span> </span>
                        {this.props.list.notes}<span> </span>
                        <input type="submit" className="recbtn" value="Recipe"/>
                    </form>
                </ul>
            </div>
            );
    }
}

class Recipedetails extends React.Component{
    render(){
        const recipes = this.props.ingredients.map( recipe => {
            return <Recipeingredients list={recipe}></Recipeingredients>;
        });
        return(
            <DefaultLayout>
                <div>
                    <h3>Click on any ingredients to check which recipe uses them</h3>
                    <div className="container">
                      <div id="ingcont" className="row">
                        <div id="ing" className="col-12 col-sm-6 col-lg-4 d-flex align-self-center">
                          Ingredients:
                        </div>
                        <div id="ingrec" className="col-sm-12 col-lg-8">
                          {recipes}
                        </div>
                      </div>
                    </div>
                    <br />
                    <form method="GET" action="/recipe">
                        <input type="submit" value="Home" />
                    </form>
                </div>
            </DefaultLayout>
            );
    }
}

module.exports = Recipeingredients;
module.exports = Recipedetails;