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

//Should print only unique categories
class MainContent extends React.Component{
    render(){

        const categoryArr = this.props.data;
        let outList;

            outList = categoryArr.map(item =>{
            return  <div class="card">
                        <div class="card-body">
                            <h5 class="card-category">{item}</h5>
                        </div>
                    </div>

        });
        return(
            <html>
                <h3>Categories</h3>
                <div class="row categories">
                    {outList}
                </div>
            </html>

        );
    }
}

class ViewAll extends React.Component{
    render(){


            const listArr = this.props.data
            console.log(this.props);
            console.log(listArr);
            console.log(listArr.length);
            let outList;
            outList = listArr.map(item=>{
                return  <div class="card-recipes">
                            <a class="card-body card-body-recipes" href={`/recipe/${item.id}`}>
                                <h4 class="card-title">{item.title}</h4>
                            </a>
                        </div>

            })
        return(
            <html>
                <h3>Recipes</h3>
                <div class="row all-recipes">
                    {outList}
                </div>
            </html>
        )
    }
}

class Home extends React.Component{
    render(){
        const inputData = this.props.objToRender;
        let categoryArr;
        let listArr;
        let id;
        if(inputData[1].length >1){
            //looks into "recipes" array of objects
            listArr = inputData[0]; // arr of all items
            console.log("when all is fine and cool: " + listArr);
            categoryArr = inputData[1];  //arr of unquie categories
            id = [];
            console.log("here in normal home");

        } else if(inputData[1].length == 1){
            console.log('inside ID RENDER');
            categoryArr =[];
            id = inputData[1];
            listArr = [inputData[0][id-1]];
            console.log(categoryArr);
            console.log(listArr);
            console.log(id);
        }

        return (
            <html>
                <Head/>
                <body>
                    <header>
                        <h1>Recipe List Collector</h1>
                    </header>
                    <main>
                        <NavAndAside/>
                        <div class="content">
                            <MainContent data={categoryArr}/>
                            <ViewAll data={listArr}/>
                        </div>
                    </main>
                </body>
            </html>
        )
    }
}

module.exports = Home;



  // if(listArr.length == 1){
  //           outList
  //           }