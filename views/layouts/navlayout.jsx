var React = require('react');

class NavLayout extends React.Component {
  render() {
    console.log("navLayout");
    let displaySort = "";
    if(this.props.sort){
        displaySort =  ( <div class="justify-content-between mr-5">
           <div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle mr-5" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Sort By
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <a class="dropdown-item" href="/recipes/sort/latest">Latest</a>
    <a class="dropdown-item" href="/recipes/sort/oldest">Oldest</a>
    <a class="dropdown-item" href="/recipes/sort/title">Title</a>
  </div>
</div>
           </div>);
    }

    return (
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <h2>Recipe-keeper</h2>
  <div class="collapse navbar-collapse" id="navbarNavDropdown">
    <ul class="navbar-nav">
    {this.props.children}
          </ul>
      </div>
      {displaySort}
</nav>
    );
  }
}

module.exports = NavLayout;