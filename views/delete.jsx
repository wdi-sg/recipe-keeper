var React = require('react');
var Layout = require('./layout.jsx');

class Delete extends React.Component {

  render() {

    let deleteValue = `/recipes/${this.props.id}?_method=DELETE`

    return (
        <Layout>
                <form method="POST" action={deleteValue}>
                    <h1>Are you sure you want to delete {this.props.name}?</h1>

                    <button type="submit" class="btn btn-primary">Yes, I'm sure</button>
                </form>

        </Layout>
    );
  }
}

module.exports = Delete;