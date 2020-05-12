var React = require('react');

class Delete extends React.Component {
    render() {

    const Layout = require('./defaultlayout.jsx');
    let formAction = '/recipes/' + this.props.id + '?_method=delete';

        return (
                <Layout>
                    <h4>Deleting {this.props.title}</h4>

                    <form method="POST" action={formAction}>
                        <button type="submit">Delete</button>
                    </form>
                </Layout>


        )
    }
}

module.exports = Delete;