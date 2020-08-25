const React=require('React');

export default class PrefilForm extends React.Component {
    render(){
        let { id,name,height } =this.props
        console.log(this.props)
        return (
            <form method="POST" action={`/pokemon/${id}?_method=put`}>
                Pokemon Name - <input type="text" name="pokemonName" value={name}/>
                <br/>
                Pokemon Height - <input type="text" name="pokemonHeight" value={height}/>
                    <br/>
                <input type="submit" value="Submit"/>
            </form>
            )
    }
}
