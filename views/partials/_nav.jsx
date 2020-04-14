import React from 'react'

const Nav = (props) => {
  const [isMMenuActive, setMMenuActive] = React.useState(0)
  const handleHamburgerClicked = (e) => (e.preventDefault(),
      isMMenuActive ? setMMenuActive(0) : setMMenuActive(1)
  )
  return (
    <nav className="navbar is-white is-spaced">

      <div className="navbar-brand">
        <div className="navbar-item">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Recipe_logo.jpeg/240px-Recipe_logo.jpeg"
            alt="site-logo"/>
          <a href="/" className="navbar-item has-text-weight-bold">Recipe Keeper</a>
        </div>

        <a className={`navbar-burger burger ${isMMenuActive ? 'is-active' : ''}`} aria-label='menu'
           onClick={handleHamburgerClicked}>
          <span aria-hidden="true"/>
          <span aria-hidden="true"/>
          <span aria-hidden="true"/>
        </a>
      </div>

      <div className={`navbar-menu  ${isMMenuActive ? 'is-active' : ''}`}>
        <div className="navbar-start">
          <a className="navbar-item" href="/">Home</a>
          <a href="/recipes" className="navbar-item">All Recipes</a>
          <a href="/recipes/add" className="navbar-item">New Recipe </a>
        </div>
      </div>

    </nav>
  )
}

export default Nav

