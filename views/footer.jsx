var React = require('react');

class Footer extends React.Component {
    render() {
        return(
            <footer>
                <a href='/recipes/' className="home">RECIPES</a>
                <a href='/ingredients' className="home">INGREDIENTS</a>
                <a href='/recipes/new' className="create">CONTRIBUTE</a>
                <a href='' className="contact">CONTACT</a>
                <p>©2019 HOUSEOFCOOKS.COM.SG ALL RIGHTS RESERVED.</p>
            </footer>
        )
    }
}


module.exports = Footer;