const React = require('react');
const Layout = require('./layout');

class Landing extends React.Component {
    render() {
        return (
            <Layout>
                <img className="img-fluid" src="/banner-bg.jpg"/>
            </Layout>
        );
    };
};

module.exports = Landing;