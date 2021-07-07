var React = require('react');


class Navbar extends React.Component {
  render() {

    return (
            <div>
                <ul>
                  <li><a className="active" href="/recipes">Home</a></li>
                  <li><a href="/recipes/new">Create a Recipe</a></li>
                </ul>
            </div>
  )
}
}

module.exports = Navbar;