var React = require('react');
import DefaultView from './DefaultView';

class Home extends React.Component {

    render() {

        return (
            <DefaultView>
            <div>
            <h1>Welcome to My Recipes Home</h1>
            <p>The aim of the recipe store is to provide you the capability to Add, Browse, Edit and Delete your recipe.</p>
            <p>I hope you enjoy the recipe store.</p>
            <p>Thank you for visiting us.</p>            
            </div>

            </DefaultView>
        )
    }
}

module.exports = Home