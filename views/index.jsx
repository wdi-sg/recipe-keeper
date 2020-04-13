var React = require('react');

class Home extends React.Component {
  render() {
    const recipes = this.props.data.recipes;

    return (
        <html className="h-100">
        <head>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossOrigin="anonymous"/>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-select/1.13.1/css/bootstrap-select.css"/>
        <title>fastfood</title>
        </head>
        <body className="h-100">
        <header>
        <nav className="navbar justify-content-center border-bottom" style={{"color": "#ED4233"}}>
        <span className="navbar-brand mb-0 h1">fastfood</span>
        </nav>
        </header>

        <div className="d-inline-block" style={{"background": "url(https://wallpaperplay.com/walls/full/1/6/2/93324.jpg)", "backgroundPosition": "center", "backgroundSize": "cover", "width": "100%", "height": "500px", "opacity": "0.7"}}>
        <div className="row h-100 align-items-center justify-content-center">
        <div className="d-inline-block w-25 text-center" style={{"backgroundColor": "rgba(255,255,255,0.8)"}}>
        <h1>Welcome</h1>
        </div>
        </div>
        </div>

        <br/><br/><br/>

        <div className="row justify-content-around my-5 text-center">
        <div className="d-inline-block" style={{"width": "40%"}}>
        <a href="/recipes/0"><div className="d-inline-block" style={{"background": `url(${recipes[0].img})`, "backgroundPosition": "center", "backgroundSize": "cover", "width": "500px", "height":  "300px"}}></div></a>
        <h4 className="my-3">Western</h4>
        <h2>{recipes[0].title}</h2>
        </div>
        <div className="d-inline-block" style={{"width": "40%"}}>
        <a href="/recipes/1"><div className="d-inline-block" style={{"background": `url(${recipes[1].img})`, "backgroundPosition": "center", "backgroundSize": "cover", "width": "500px", "height":  "300px"}}></div></a>
        <h4 className="my-3">Western</h4>
        <h2>{recipes[1].title}</h2>
        </div>
        </div>

        <footer>
        <nav className="navbar navbar-dark bg-dark justify-content-end w-100">
        <span className="navbar-brand" style={{"fontSize": "14px"}}>© fastfood 2020</span>
        </nav>
        </footer>

        <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.bundle.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-select/1.13.1/js/bootstrap-select.min.js"></script>
        </body>
        </html>
        );
}
}

module.exports = Home;