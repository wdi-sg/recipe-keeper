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

class FormNewRecipe extends React.Component{
    render(){



        let formAction = '/recipe/newadded';
        let newId = 1;

        return(
            <html>
                <form method="POST" action={formAction}>
                    <div class="form-row">
                        <div class="col-md-4 mb-3">
                            <label >Title: </label>
                            <input type="text" name="title" class="form-control" required/>
                        </div>
                        <div class="col-md-4 mb-3 ml-5">
                            <label>Category: </label>
                            <input type="text" name="category" class="form-control" placeholder="Supper, Dinner, Cold Dish etc" required/>
                        </div>
                        <div class="col-md-1 invisible">
                            <label>ID:</label>
                            <input class="invisible" type="text" name="id" class="form-control" value={newId} required/>
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="col-md-10 mb-3">
                            <label>Ingredient List</label>
                            <textarea type="text" name="ingredients" class="form-control"  placeholder="A speck of special, a tea spoon of awesome, a live 4-inch unicorn....."  rows="5"required>
                            </textarea>
                        </div>
                    </div>
                    <div class="form-row">
                            <div class="col-md-10 mb-3">
                            <label>Instructions</label>
                            <textarea type="text" name="instructions" class="form-control"  placeholder="Tell us all your nifty culinary secrets...."  rows="7"required>
                            </textarea>
                        </div>
                    </div>
                    <input type="submit" value="Submit Recipe"  class="btn btn-primary"/>
                </form>
            </html>
        )
    }
}

class New extends React.Component{
    render(){

        const inputData = this.props.objToRender;
        let categoryArr;
        let listArr;

        if(inputData[1].length > 0){
            //looks into "recipes" array of objects
            listArr = inputData[0]; // arr of all items
            categoryArr = inputData[1];  //arr of unique categories

        } else if(inputData[1].length == 0){
            categoryArr =[];
            listArr=[];
        }

        return(
            <html>
                <Head/>
                <body>
                    <header>
                        <h1>Recipe List Collector</h1>
                    </header>
                    <main>
                        <NavAndAside data={categoryArr}/>
                        <div class="content">
                            <FormNewRecipe/>
                        </div>
                    </main>
                </body>
            </html>
        );
    }
}

module.exports= New;