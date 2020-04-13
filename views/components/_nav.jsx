import React from 'react'

const Nav = (props) => {

  return (
    <nav className="navbar is-light is-spaced">

      <div className="navbar-brand">
        <a href="" className="navbar-item">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Recipe_logo.jpeg/240px-Recipe_logo.jpeg"
               alt="site-logo"/>
          <a href="" className="navbar-item is-bold">Recipe Keeper</a>
        </a>
      </div>

      <div className="navbar-menu">
        <div className="navbar-start">
          <a className="navbar-item" href="/">Home</a>
          <a href="/recipes" className="navbar-item">All Recipes</a>
        </div>
      </div>

    </nav>
  )
}

export default Nav

