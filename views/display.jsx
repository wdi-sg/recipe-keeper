const React = require('react');

export default class display extends React.Component {
    render(){
        let { title, ingredients, instructions } = this.props
        return (
                    <div>
                        <h1>{title}</h1>
                        <p>{ingredients}</p>
                        <p>{instructions}</p>
                    </div>

            )
    }
}