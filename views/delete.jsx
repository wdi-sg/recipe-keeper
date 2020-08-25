const React =  require('react');

export default class Delete extends React.Component {
    render(){
        return (
            <div>
            <form method ="POST" action={`/recipes?_method=delete`}>
                <input type="text" name="delete" placeholder="id to delete"/>
                <input type="Submit" value="Delete this title"/>
            </form>
                <br/>
                <br/>
                <a href="/recipes">Home Page</a>
            </div>
            )
    }
}