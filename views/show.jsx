var React = require('react');

class Show extends React.Component {
    render() {
        const Layout = require('./defaultlayout.jsx');

        return (
            <Layout>
                <h2>{this.props.title}</h2>
                    <h4>
                        ID: {this.props.id}<br/>
                        Title: {this.props.title}<br/>
                        Ingredients: {this.props.ingredients}<br/>
                        Instructions: {this.props.instructions}<br/>
                    </h4>
                <h5><a href="edit">Edit this recipe?</a></h5>

</Layout>

        )
    }
}

module.exports = Show;