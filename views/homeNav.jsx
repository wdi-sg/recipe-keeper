var React = require('react');
const ReactDom = require('react-dom');
var RecipesGrid = require('./viewRecipes');

// class Link extends React.Component {

//     render() {
//         let links = this.props.pathLink.map(link => {
//             return <li>here {link}</li>
//         });

//         return (
//             <ul>{links}</ul>
//         )
//     }
// }

// module.exports = Link;

class List extends React.Component {

    render() {
        let navElements = this.props.items.map(item => {
            return (


                              <li class="nav-item text-white d-md-block mr-3"><a class="text-white" href={item.pathLink}>{item.navItem}</a></li>




            )
        });
        return (
            <html>
            <head>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous"></link>
        <link href="https://fonts.googleapis.com/css?family=Montserrat&display=swap" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css?family=Libre+Baskerville&display=swap" rel="stylesheet"></link>
        </head>
        <body>
            <div>
            <nav class="navbar bg-info">
            <h3 class="text-white" style={{fontFamily: 'Libre Baskerville'}} > Maria's Recipe Keeper</h3>
            <ul class="nav  justify-content-end">
            {navElements}
          </ul>
          </nav>

          </div>


          </body>
          </html>
        );


    }


}



module.exports = List;


// class RecipesPage extends React.Component {


//     render() {




//         return (
//           <Recipes items={Recipes}/>
//         );
//     }
// }

// module.exports = RecipesPage;