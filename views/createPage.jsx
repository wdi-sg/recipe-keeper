var React = require('react');

class Create extends React.Component {
  render() {
    return(
        <Layout>
            <h1>Create a new Recipe!</h1>
            <form action ="/recipes" method ="POST">
                <h2>ID</h2>
                <input type="number" name="id" defaultValue="ID"/>

                <h2>Name</h2>
                <input type="text" name="name" defaultValue="Name"/>

                <h2>Ingredients</h2>
                <input type="text" name="ingredients" defaultValue="Ingredients"/>

                <h2>Quantity</h2>
                <input type="text" name="Qty" defaultValue="Quantity"/>

                <h2>Img Src</h2>
                <input type="text" name="img" defaultValue="Img Src"/>

                <h2>Instruction</h2>
                <input type="text" name="Instruction" defaultValue="Instruction"/>
                <br/><br/>
                <input type="submit"/>
            </form>
        </Layout>
    )
  }
}


module.exports = Create;