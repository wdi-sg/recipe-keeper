const React = require('react');

export default class Form extends React.Component{
    render(){
        return (
            <form method="POST" action="/recipes">
                Title: <input type="text" name="title"/>
                <br/>
                Ingredients: <input type="text" name="ingredients"/>
                <br/>
                Instructions: <input type="text" name="instructions"/>
                <br/>
                <input type="submit"/>
            </form>
        )
    }
}