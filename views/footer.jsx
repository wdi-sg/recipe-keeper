var React = require('react');

class Footer extends React.Component {
    render() {
        return(
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
        )
    }
}


module.exports = Footer;