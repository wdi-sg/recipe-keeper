const React = require('react');

class Select extends React.Component {
  render() {

    return (
        <form method="GET">
            <select name="sortby">
              <option value="id">ID</option>
              <option value="title-asc">Title (Asc)</option>
              <option value="title-des">Title (Des)</option>
              <option value="ingrd"># of Ingredients</option>
            </select>
            <input type="submit" value="Sort"/>
        </form>
    )
  }
}

module.exports = Select;