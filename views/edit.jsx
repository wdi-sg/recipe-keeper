const React = require('react');

export default class Edit extends React.Component {
    render(){
        let { title, ingredients, instructions, id } = this.props
        return (
                <form method="POST" action={`/recipes/${id}?_method=put`}>
                    <input type="text" name="title" value={title}/>
                    <input type="text" name="ingredients" value={ingredients}/>
                    <input type="text" name="instructions" value={instructions}/>
                    <input type="submit" value='submit'/>
                </form>
            )
    }
}