var React = require('react');

class TopThree extends React.Component {
render() {

const topThree = this.props.recipes.filter((item, index)=>{
if (index < 3) { return item } }); const allRecipes=topThree.map((item, index)=>{

    let hrefURL = "/recipes/"+index;

    let limitedDescription = item.description.substring(0, 20) + "..."

    return (
    <div className="col-sm-4">
        <div className="card border-success mb-3" style={{width: "14rem"}}>
            <div className="card-body text-success">
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text">{limitedDescription}</p>
                <a href={hrefURL} className="btn btn-success w-50 d-flex ml-auto">More...</a>
            </div>
        </div>
    </div>
    )
    })



    return (
    <div className="h-75">
        <div className="row w-100 h-25 justify-content-center mt-5">
            <h1>Top Three Recipes</h1>
        </div>
        <div className="row justify-content-center align-items-start w-100 h-50">
            <div className="card-deck">
                {allRecipes}
            </div>
        </div>
    </div>
    );
    }
    }

    module.exports = TopThree;