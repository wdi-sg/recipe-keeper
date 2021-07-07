var React = require('react');
var NavAndAside = require('./navAndAside');

class Head extends React.Component{
    render(){
        return(
            <head>
                <meta charSet="utf-8"/>
                <title>Cook Me Up</title>
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossOrigin="anonymous"/>
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"/>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
                <link rel="stylesheet" href="/style.css"/>
            </head>
        )
    }
}

class Aside extends React.Component{
    render(){
        let inputData = this.props.data
        let outList;
        if(inputData == undefined){

            return  <div>

                    </div>
        }
        return(
            <aside>
                <figure>
                    <h4>Category PlayList</h4>
                    {outList}
                </figure>
            </aside>
        );
    }
}

class Navigation extends React.Component{
    render(){
        return(
            <nav>
                <ul class="nav flex-column">
                    <li class="nav-item">
                        <a method="GET" href="/recipe/new"><span class=" glyphicon glyphicon-plus" aria-hidden="true"></span>Add New Recipe</a>
                    </li>
                    <li class="nav-item">
                    <a method="GET" href="/"><span class="glyphicon glyphicon-home" aria-hidden="true"></span> Home</a>
                    </li>
                </ul>
            </nav>




        );
    }
}

class ViewSingle extends React.Component{
    render(){

            const singleItem = this.props.data;
            const singleTitle = singleItem.title;
            const singleCategory = singleItem.category;
            const singleIngredients = singleItem.ingredients;
            const singleInstructions = singleItem.instructions;
            const singleId = singleItem.id;
            const timeCreated = singleItem.timeCreated;
            const timeUpdated = singleItem.updated_At;

        return(
            <html>
            <div class="col single-recipe">
                <div class="row">
                    <div class="col">
                        <h2>{singleTitle}</h2>
                    </div>
                    <div class="col time-stamps">
                        <h8>Created: {timeCreated}</h8>
                        <br></br>
                        <h8>Updated: {timeUpdated}</h8>
                    </div>
                </div>
                    <br></br>
                    <span><h4>Category: {singleCategory}</h4> </span>
                    <br></br>
                    <h4>Ingredients</h4>
                    <div class="row single-recipe">
                        <p>
                            {singleIngredients}
                        </p>
                    </div>
                    <h4>Instructions</h4>
                    <div class="row single-recipe">
                        <p>
                            {singleInstructions}
                        </p>
                    </div>
                    <div class="row single-recipe">
                    <a className="btn btn-info mr-3 ml-3" href={`/recipe/${ singleId }/edit`}>edit</a>
                    <a className="btn btn-danger mr-3 ml-3" href={`/recipe/${ singleId }/delete`}>delete</a>
                    </div>
                </div>
            </html>
        )
    }
}

class View extends React.Component{
    render(){

        const listArr = this.props.objToRender;

        return (
            <html>
                <Head/>
                <body>
                    <header>
                        <h1>Recipe List Collector</h1>
                    </header>
                    <main>
                        <Aside/>
                        <Navigation/>
                        <div class="content">
                            <ViewSingle data={listArr}/>
                        </div>
                    </main>
                </body>
            </html>
        )
    }
}

module.exports = View;