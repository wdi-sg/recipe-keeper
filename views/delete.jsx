var React = require('react');
var Layout = require('./layout.jsx');

class Delete extends React.Component {

  render() {

    let deleteValue = `/recipes/${this.props.id}?_method=DELETE`
    let editPage = `/recipes/${this.props.id}/edit`

    return (
        <Layout>
            <div class="col-6 m-5">
                <form method="POST" action={deleteValue} class="d-inline">
                    <h2>Are you sure you want to delete {this.props.name}?</h2>
                    <button type="submit" class="btn btn-danger">Yes, I'm sure</button>
                </form>
                    <a href={editPage}> <button class="btn btn-primary">Back</button></a>
            </div>

        </Layout>
    );
  }
}

module.exports = Delete;