var React = require('react');

class DefaultLayout extends React.Component {
    render() {
        return (

            <html>
                <head>
                    <meta charset="utf-8"/>
                    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
                    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css" integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS" crossorigin="anonymous"/>
                    <link href='https://fonts.googleapis.com/css?family=Londrina+Shadow' rel='stylesheet' type='text/css'/>
                    <link rel="stylesheet" type="text/css" href="/style.css"/>
                </head>
                <body>
                    <header>
                        <div class="row">
                            <h1 class="col">House of Cooks</h1>
                        </div>
                    </header>
                    <nav className="navbar navbar-expand-md bg-dark">
                      <div className="collapse navbar-collapse d-flex justify-content-center" id="navbarNav">
                        <ul className="navbar-nav">
                          <li className="nav-item">
                            <a className="nav-link" href='/recipes/'>RECIPES</a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href='/ingredients'>INGREDIENTS</a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href='/recipes/new'>CONTRIBUTE</a>
                          </li>
                        </ul>
                      </div>
                    </nav>
                    {this.props.children}
                    <footer>
                        <div className="row">
                            <div className="col">
                                <a href='/recipes/' className="home">RECIPES</a>
                            </div>
                            <div className="col">
                                <a href='/ingredients' className="home">INGREDIENTS</a>
                            </div>
                            <div className="col">
                                <a href='/recipes/new' className="create">CONTRIBUTE</a>
                            </div>
                            <div className="col">
                                <a href=''>CONTACT</a>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <p>©2019 HOUSEOFCOOKS.COM.SG ALL RIGHTS RESERVED.</p>
                            </div>
                        </div>
                    </footer>
                    <div>
                        <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
                        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.6/umd/popper.min.js" integrity="sha384-wHAiFfRlMFy6i5SRaxvfOCifBUQy1xHdJ/yoi7FRNXMRBu5WHdZYu1hA6ZOblgut" crossorigin="anonymous"></script>
                        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/js/bootstrap.min.js" integrity="sha384-B0UglyR+jN6CkvvICOB2joaf5I4l3gm9GU6Hc1og6Ls7i6U/mkkaduKaBhlAXv9k" crossorigin="anonymous"></script>
                    </div>
                </body>
            </html>

        )

    }
}


module.exports = DefaultLayout;