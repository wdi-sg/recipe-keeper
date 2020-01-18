var React = require('react');

class Navbar extends React.Component {
render() {
    let id = -1
    const showRecipes = this.props.recipes.map((item)=>{
        id++
        let hrefURL = "/recipes/"+id
        return <a className="dropdown-item" href={hrefURL} key={id}>{item.title}</a>
    })

    let editId = -1
    const editRecipes = this.props.recipes.map((item)=>{
        editId++
        let hrefURL = "/recipes/"+editId+"/edit"
        return <a className="dropdown-item" href={hrefURL} key={editId}>{item.title}</a>
    })

    let deleteId = -1
    const deleteRecipes = this.props.recipes.map((item)=>{
        deleteId++
        let hrefURL = "/recipes/"+deleteId+"/delete"
        return <a className="dropdown-item" href={hrefURL} key={deleteId}>{item.title}</a>
    })

return (

<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="#">Navbar</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <ul className="navbar-nav">
  <li className="nav-item active">
        <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
      </li>
  </ul>

  <div className="collapse navbar-collapse justify-content-center mr-5" id="navbarNavDropdown">
    <ul className="navbar-nav">
      <li className="nav-item">
        <a className="nav-link" href="/recipes">All Recipes</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/recipes/new">New Recipe</a>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Show Recipe
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          {showRecipes}
        </div>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Edit Recipe
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          {editRecipes}
        </div>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Delete Recipe
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          {deleteRecipes}
        </div>
      </li>
    </ul>
  </div>
</nav>

);
}
}

module.exports = Navbar;