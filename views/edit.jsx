const React =  require('react');

export default class Edit extends React.Component {
    render(){
        let { title, ingredients, instructions, id } = this.props
        return (
            <div>
            <form method="POST" action={`/recipes/${id}?_method=put`}>
                <input type="text" name="title" placeholder="title" value={title}/>
                <input type="text" name="ingredients" placeholder="ingredients" value={ingredients}/>
                <input type="text" name="instructions" placeholder="instructions" value={instructions}/>
                <input type="text" name="id" placeholder="" value={id}/>
                <input type="Submit" value="submit"/>
            </form>
                <br/>
                <br/>
                <a href="/recipes">Home Page</a>
            </div>
            )
    }
}