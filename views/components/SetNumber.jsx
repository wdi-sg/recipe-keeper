const React = require("react");

class SetNumber extends React.Component {
  render() {
    const {number, id} = this.props;
    let path = id === undefined ? "/recipes/new" : `/recipes/${id}/edit`;
    return (
      <>
        <form action={path} method="get">
          <label htmlFor="number">Total number of ingredients required? </label>
          <input type="number" name="number" defaultValue={number} />
        </form>
      </>
    );
  }
}

module.exports = SetNumber;
