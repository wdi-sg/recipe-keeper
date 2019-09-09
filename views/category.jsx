import React, { Component } from 'react'

class Category extends Component {
    constructor(props) {
        super(props)

        this.state = {
            category: {}
        }
    }

    componentWillMount() {
        fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
            .then(function(response) {
                return response.json();
            })
            .then(function(myJson) {
                console.log(JSON.stringify(myJson));
            });
    }

    render() {
        return (
            <div>
                {this.state.category}
            </div>
        )
    }
}

module.exports = Category
