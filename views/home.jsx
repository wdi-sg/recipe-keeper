const React = require('react')
import {Link ,Router} from 'react-router-dom';

export default class Home extends React.Component {
    render () {
        return (
            <div>
                <a href="/recipes/new">Create a new recipe</a>
                <br/>
                <br/>
                <a href="/recipes/delete">Delete a recipe</a>
                <br/>
                <br/>
                <a href="/recipes/show">Show all the recipes</a>
            </div>
            )
    }
}