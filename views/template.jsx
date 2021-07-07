var React = require('react');

class Head extends React.Component {
    render() {
        return(
            <head>
                <meta charset="utf-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css" integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS" crossorigin="anonymous"/>
                <link rel="stylesheet" type="text/css" href="/style.css"/>
            </head>
            )
    }
}

class Header extends React.Component {
    render() {
        return(
            <header>
                <h1>House of Cooks</h1>
            </header>
        )
    }
}


// class Nav extends React.Component {
//     render() {
//         return(
//             <nav>
//                 <a href='/recipes/' className="home">RECIPES</a>
//                 <a href='/ingredients' className="ingredients">INGREDIENTS</a>
//                 <a href='/recipes/new' className="create">CONTRIBUTE</a>
//             </nav>
//         )
//     }
// }


// class Footer extends React.Component {
//     render() {
//         return(
//             <footer>
//                 <a href='/recipes/' className="home">RECIPES</a>
//                 <a href='/ingredients' className="home">INGREDIENTS</a>
//                 <a href='/recipes/new' className="create">CONTRIBUTE</a>
//                 <a href='' className="contact">CONTACT</a>
//                 <p>©2019 HOUSEOFCOOKS.COM.SG ALL RIGHTS RESERVED.</p>
//             </footer>
//         )
//     }
// }


module.exports = Head;
// module.exports = Header;
// module.exports = Nav;
// module.exports = Footer;