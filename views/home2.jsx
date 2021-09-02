var React = require('react');
var DefaultLayout = require('./default')

class Home extends React.Component {

  render() {

        let vegetarianArr = [];
        let veganArr = [];
        let rawArr = [];
        let noneArr = [];

        this.props.recipes.forEach(function(recipe) {
            if (recipe.diet == "vegetarian") {
                vegetarianArr.push(recipe);
            } else if (recipe.diet == "vegan") {
                    veganArr.push(recipe);
            } else if (recipe.diet == "raw") {
                    rawArr.push(recipe);
            } else if (recipe.diet == "none") {
                    noneArr.push(recipe);
            }
        });

        let vegetarian = vegetarianArr.map( (recipe) => {
            let index = parseInt(recipe.id);
            return (
                <div className="card m-4 text-center align-middle" style={{width: 18 + 'rem'}, {display: "inline-block"}}>
                    <img className="card-img-top" src={recipe.img} style={{width:18 +'rem'}}/>
                    <div className="card-body" style={{width:18 +'rem'}}>
                        <h5 className="card-title">{recipe.title}</h5>
                        <p className="card-text">
                            {recipe.description}
                        </p>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                                Serving good for: {recipe.serving} pax
                            </li>
                        </ul>
                        <a href={`/recipes/${index}`} className="btn btn-primary text-center align-middle mt-3">View</a>
                    </div>
                </div>
            );
        });

        let vegan = veganArr.map( (recipe) => {
            let index = parseInt(recipe.id);
            return (
                <div className="card m-4 text-center align-middle" style={{width: 18 + 'rem'}, {display: "inline-block"}}>
                    <img className="card-img-top" src={recipe.img} style={{width:18 +'rem'}}/>
                    <div className="card-body" style={{width:18 +'rem'}}>
                        <h5 className="card-title">{recipe.title}</h5>
                        <p className="card-text">
                            {recipe.description}
                        </p>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                                Serving good for: {recipe.serving} pax
                            </li>
                        </ul>
                        <a href={`/recipes/${index}`} className="btn btn-primary text-center align-middle mt-3">View</a>
                    </div>
                </div>
            );
        });

        let raw = rawArr.map( (recipe) => {
            let index = parseInt(recipe.id);
            return (
                <div className="card m-4 text-center align-middle" style={{width: 18 + 'rem'}, {display: "inline-block"}}>
                    <img className="card-img-top" src={recipe.img} style={{width:18 +'rem'}}/>
                    <div className="card-body" style={{width:18 +'rem'}}>
                        <h5 className="card-title">{recipe.title}</h5>
                        <p className="card-text">
                            {recipe.description}
                        </p>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                                Serving good for: {recipe.serving} pax
                            </li>
                        </ul>
                        <a href={`/recipes/${index}`} className="btn btn-primary text-center align-middle mt-3">View</a>
                    </div>
                </div>
            );
        });

        let none = noneArr.map( (recipe) => {
            let index = parseInt(recipe.id);
            return (
                <div className="card m-4 text-center align-middle" style={{width: 18 + 'rem'}, {display: "inline-block"}}>
                    <img className="card-img-top" src={recipe.img} style={{width:18 +'rem'}}/>
                    <div className="card-body" style={{width:18 +'rem'}}>
                        <h5 className="card-title">{recipe.title}</h5>
                        <p className="card-text">
                            {recipe.description}
                        </p>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                                Serving good for: {recipe.serving} pax
                            </li>
                        </ul>
                        <a href={`/recipes/${index}`} className="btn btn-primary text-center align-middle mt-3">View</a>
                    </div>
                </div>
            );
        });

    return (
        <DefaultLayout>
            <form>
                <span className="m-4 text-primary">Sort by:</span>
                <div className="input-group w-50">
                    <select className="custom-select mt-2 mb-4 ml-4" name="sortby">
                        <option value="name">Name of dish</option>
                        <option value="diet">Type of diet</option>
                        <option value="ingredient">Includes ingredient</option>
                    </select>
                        <input className="btn btn-primary h-75 mx-4 mt-2 mb-2" type="submit" value="Submit"/>
                        <a className="btn btn-primary h-75 mx-4 mt-2" href="/recipes/new">Add Recipe</a>
                </div>
            </form>
            <div>
                <h1>Vegetarian</h1>
                {vegetarian}
            </div>
            <div>
                <h1>Vegan</h1>
                {vegan}
            </div>
            <div>
                <h1>Raw</h1>
                {raw}
            </div>
            <div>
                <h1>None</h1>
                {none}
            </div>
        </DefaultLayout>
    );

  }


}

module.exports = Home;