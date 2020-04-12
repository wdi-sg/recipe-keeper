var React = require('react');

class TopThree extends React.Component {
render() {

const topThree = this.props.recipes.filter((item, index)=>{
if (index < 3) { return item } }); const allRecipes=topThree.map((item, index)=>{

    let hrefURL = "/recipes/"+index;

    let limitedDescription = item.ingredients.substring(0, 45) + "..."

    return (
    <div className="col-lg-4 col-md-7 col-sm-8 col-xs-12 d-flex justify-content-center" key={index}>
        <div className="card border-success mb-3" style={{width: "14rem", height: "11rem"}}>
            <div className="card-body text-success">
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text text-dark" style={{height: "50px"}}>{limitedDescription}</p>
                <a href={hrefURL} className="btn btn-success w-50 d-flex justify-content-center align-self-end ml-auto">More</a>
            </div>
        </div>
    </div>
    )
    })



    return (
    <div className="h-75">
        <div className="row w-100 h-25 justify-content-center mt-5">
            <h1>Best Recipes</h1>
        </div>
        <div className="row justify-content-center align-items-start w-100 h-50">
            <div className="card-deck w-75 justify-content-around">
                {allRecipes}
            </div>
        </div>
    </div>
    );
    }
    }

    module.exports = TopThree;