var React = require('react');

class DefaultLayout extends React.Component {
  render() {
    return (
            <html>
                <head>
                    <title>Home</title>
                    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossOrigin="anonymous"/>
                    <link rel="stylesheet" href="/css/style.css"/>
                </head>

                <body>
                    <div className="container">
                        <div className="row banner">
                            <div>Recipe Keeper</div>
                        </div>

                        <div className="row">
                            <div className="col-3 navigation">
                                <input type="text" className="form-control" placeholder="Search..."/>

                                <ul className="nav nav-pills home">
                                    <li className="nav-item">
                                        <a className="nav-link" href="/"><img src="/img/home.svg"/>Home</a>
                                    </li>
                                </ul>

                                <ul className="nav nav-pills new">
                                    <li className="nav-item">
                                        <a className="nav-link" href="/recipes/new"><img src="/img/plus.svg"/>Add New Recipe</a>
                                    </li>
                                </ul>
                            </div>

                            <div className="col-9">
                                <div className="header">
                                    <img src="/img/chef.svg"/>
                                    <div>{ this.props.title }</div>
                                </div>
                                {this.props.children}
                            </div>

                        </div>
                    </div>
                    <script src="/js/script.js"></script>
                </body>
            </html>
    );
  }
}

module.exports = DefaultLayout;