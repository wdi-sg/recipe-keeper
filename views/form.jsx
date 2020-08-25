const React =  require('react');

export default class Form extends React.Component {
    render(){
        return (
            <div>
            <form method="POST" action="/recipes">
                <input type="text" name="title" placeholder="title"/>
                <input type="text" name="ingredients" placeholder="ingredients"/>
                <input type="text" name="instructions" placeholder="instructions"/>
                <input type="Submit" value="submit"/>
            </form>
                <br/>
                <br/>
                <a href="/recipes">Home Page</a>
            </div>
            )
    }
}