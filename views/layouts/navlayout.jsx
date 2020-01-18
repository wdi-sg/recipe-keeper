var React = require('react');

class NavLayout extends React.Component {
  render() {
    console.log("navLayout");
    let displaySort = "";
    if(this.props.sort === "true"){
        displaySort =  ( <div className="justify-content-between mr-5">
           <div className="dropdown">
  <button className="btn btn-secondary dropdown-toggle mr-5" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Sort By
  </button>
  <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <a className="dropdown-item" href="/recipes/sort/latest">Latest</a>
    <a className="dropdown-item" href="/recipes/sort/oldest">Oldest</a>
    <a className="dropdown-item" href="/recipes/sort/title">Title</a>
  </div>
</div>
           </div>);
    }

    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <h2>Recipe-keeper</h2>
  <div className="collapse navbar-collapse" id="navbarNavDropdown">
    <ul className="navbar-nav">
    {this.props.children}
          </ul>
      </div>
      {displaySort}
</nav>
    );
  }
}

module.exports = NavLayout;