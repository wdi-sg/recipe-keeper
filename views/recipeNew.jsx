var React = require('react');
var Default = require('./default');

class RecipeNew extends React.Component {
    render() {
        return (
            <Default>
                <form method="POST" action="/"/>
                <input type="text"/>
                <h2>hello</h2>
                <input type="submit"/>
            </Default>
        )
    }
}

module.exports = RecipeNew;