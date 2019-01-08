var React = require("react");
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from "react-bootstrap";

class Home extends React.Component {
  render() {
    return (
      <html>
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"
          integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u"
          crossorigin="anonymous"
        />

        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css"
          integrity="sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp"
          crossorigin="anonymous"
        />

        <body>
          <Navbar inverse collapseOnSelect>
            <Navbar.Header>
              <Navbar.Brand>
                <a href="#brand">Recipe Keeper</a>
              </Navbar.Brand>
              <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
              <Nav pullRight>
                <NavItem eventKey={1} href="/recipes/new">
                  Create New Recipe
                </NavItem>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          {this.props.recipes.map(recipe => {
            return (
              <div id="root">
                <h2>Dish: {recipe.name} </h2>
                <h2>Ingredient:</h2>{" "}
                {recipe.ingredients.map(ingredient => {
                  return (
                    <li>
                      {ingredient.amount}x{" "}
                      {
                        this.props.ingredients.filter(function(el) {
                          return el.id == ingredient.id;
                        })[0].name
                      }
                    </li>
                  );
                })}
                <h2>Instruction</h2>{" "}
                {recipe.instructions.map(instruction => {
                  return (
                    <span>
                      <ul>
                        <li>{instruction}</li>
                      </ul>
                    </span>
                  );
                })}
                <hr />
              </div>
            );
          })}
        </body>
      </html>
    );
  }
}
module.exports = Home;
