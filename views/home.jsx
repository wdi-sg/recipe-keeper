var React = require('react');
var DefaultLayout = require('./layouts/default');

class HomePage extends React.Component {

    render() {

        return (
            <DefaultLayout title='Home'>
                <div>hello {this.props.name}</div>
                { 5 == 5 ? "yes" : "no" }
            </DefaultLayout>
            );
    }
}

module.exports = HomePage;