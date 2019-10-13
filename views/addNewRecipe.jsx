const React = require('react');
const ReactDom = require('react-dom')

class AddNew extends React.Component {
  render() {
    return (
      <html>
      <body>
           <main >
          <form id="myForm" method="POST" action="/recipes">
              Add New Recipe: <br/>
              ID:
              <input type="number" placeholder="Recipe Id" name="id"/> <br/>

              Title:
              <input type="text" placeholder = "Recipe Title" name="title"/> <br/>
              Image URL:
              <input type="url" placeholder = "Input image URL" name="img"/> <br/>
              Ingredients:
              <input type="text" placeholder = "Ingredients" name="ingredients"/> <br/>
              Preparation:
              <input class="big-div" type="text" placeholder = "Preparation" name="preparation"/> <br/>

              <input type="submit" form="myForm" value="Submit"/>
            </form>
          </main>
        </body>
      </html>
    );
  }
}

module.exports = AddNew;