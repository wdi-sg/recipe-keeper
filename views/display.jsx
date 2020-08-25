const React =  require('react');

export default class Display extends React.Component {
    render(){
        let { title, ingredients, instructions, id} = this.props
        return (
            <div>
                <h1>{title}</h1>
                <p>{ingredients}</p>
                <p>{instructions}</p>
                <br/>
                <br/>
                <a href="/recipes">Home Page</a>
            </div>
            )
    }
}