var React = require('react');

class Footer extends React.Component {
  render() {
    console.log("<Footer> component Added")
    return (
        <div className="col">
        <footer className="page-footer font-small special-color-dark pt-4">
            <div className="container">
                <ul className="list-unstyled list-inline text-center">

                    <li className="list-inline-item">
                    <a className="btn-floating btn-fb mx-1">
                    <i className="fab fa-facebook-f"> </i>
                    </a>
                    </li>

                    <li className="list-inline-item">
                    <a className="btn-floating btn-tw mx-1">
                    <i className="fab fa-github"></i>
                    </a>
                    </li>

                    <li className="list-inline-item">
                    <a className="btn-floating btn-li mx-1">
                    <i className="fab fa-linkedin-in"> </i>
                    </a>
                    </li>

                </ul>
            </div>

        <div className="footer-copyright text-center py-3">© 2019 Copyright:

        </div>
        </footer>
        </div>

     );
}
}

module.exports = Footer;