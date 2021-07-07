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

class ViewAll extends React.Component{
    render(){
            const listArr = this.props.data
            let outList;
            if(listArr.length >0){
            outList = listArr.map(item=>{
                return  <div class="card-recipes">
                            <a class="card-body card-body-recipes" href={`/recipe/${item.id}`}>
                                <h4 class="card-title">{item.title}</h4>
                            </a>
                        </div>

            })
        } else {
            let formAction = '/recipe/new';
                return  <div class="card-recipes ">
                            <a class="card-body card-body-recipes" href={formAction}><h4>Click Add New Recipes to Begin</h4></a>

                        </div>

        }
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

        if(inputData[1].length > 0){
            //looks into "recipes" array of objects
            listArr = inputData[0]; // arr of all items
            categoryArr = inputData[1];  //arr of unique categories

        } else if(inputData[1].length == 0){
            categoryArr =[];
            listArr=[];
        }
        return (
            <html>
                <Head/>
                <body>
                    <header>
                        <h1>Recipe List Collector</h1>
                    </header>
                    <main>
                        <NavAndAside data={categoryArr}/>
                        <div class="content">
                            <ViewAll data={listArr}/>
                        </div>
                    </main>
                </body>
            </html>
        )
    }
}

module.exports = Home;


// //Should print only unique categories
// class MainContent extends React.Component{
//     render(){

//         const categoryArr = this.props.data;
//         let outList;

//             outList = categoryArr.map(item =>{
//             return  <div class="card">
//                         <div class="card-body">
//                             <h5 class="card-category">{item}</h5>
//                         </div>
//                     </div>

//         });
//         return(
//             <html>
//                 <h3>Categories</h3>
//                 <div class="row categories">
//                     {outList}
//                 </div>
//             </html>

//         );
//     }
// }