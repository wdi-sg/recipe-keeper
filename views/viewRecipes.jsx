const React = require('react');
const ReactDom = 'react-dom';
const HomeNav = require('./home.jsx');


// class Row extends React.Component {
//   render () {
//     let postRow = {
//     return (
//          <div class="container">
//                 <div class=" row posts-row">

//                 </div>
//                 </div>



//         );
//   }
//   }

// }

// module.exports = Row;

class Recipes extends React.Component {
    render() {
        let grid = this.props.data.map(recipe => {
            return (

        <div class="post-card col-md-3 float-left" style={{ marginBottom: '50px', maxWidth: '30%'}}>
         <img width="400" height="auto" src={recipe.img}/>
         <h3>{recipe.title}</h3>
         <div class="offset-md-1">

            </div>

         </div>


            );
        });

        return (
            <html>
            <head>

        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous"></link>
        <link href="https://fonts.googleapis.com/css?family=Montserrat&display=swap" rel="stylesheet"></link>
        </head>

        <body class="bg-light" style={{ fontFamily: 'Montserrat'}} >
        <HomeNav/>
          <h1 class="text-center" style={{ margin: '50px'}}>Recipes</h1>
          <div class="container-fluid">
          <div class="row d-flex flex-row flex-wrap align-items-center justify-content-around" >


            {grid}
            </div>


</div>
        </body>
      </html>
        );
    }
}

module.exports = Recipes;