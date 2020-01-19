var React = require('react');
const Header = require('./header')
const Navbar = require('./navbar')

class DisplayAllRecipes extends React.Component {
render() {

    const allRecipes = this.props.recipes.map((item, index)=>{

        let hrefURL = "/recipes/"+index;
        let limitedDescription = item.description.substring(0, 20) + "..."

        return (<div className="col-lg-4 col-md-6 col-sm-8 col-xs-12 d-flex justify-content-center" key={index}>
        <div className="card border-success mb-3" style={{width: "14rem"}}>
            <div className="card-body text-success">
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text">{limitedDescription}</p>
                <a href={hrefURL} className="btn btn-success w-50 d-flex justify-content-center ml-auto">More</a>
            </div>
        </div>
    </div>
        )
        
    })

    

return (

<html>
<Header>
    <link rel="stylesheet" href="./../css/home.css" type="text/css"/>
</Header>
<body>
<Navbar recipes={this.props.recipes}/>

<div className="h-75">
        <div className="row w-100 h-25 justify-content-center mt-5">
            <h1>All Recipes</h1>
        </div>
        <div className="row justify-content-center align-items-start w-100 h-50">
            <div className="card-deck w-75 justify-content-around">
                {allRecipes}
            </div>
        </div>
    </div>
</body>
</html>
);
}
}

module.exports = DisplayAllRecipes;