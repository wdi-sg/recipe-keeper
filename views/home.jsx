var React = require('react');

class Home extends React.Component {
  render() {

    return (
      <html>
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous" />
        <body style={{backgroundColor:"#6B6172"}}>
          <div class={"container mt-5 border"} style={{width:"50%", backgroundColor:"#BCA9C5"}}>
                <div class={"row mt-3"}>
                    <div class={"col-12 text-center p-2"}>
                        <h1>Welcome User!</h1>
                    </div>
                </div>
                <div class={"row p-2"}>
                    <div class={"col-12 text-center"}>
                        <img src="https://i.imgur.com/OjtAbyE.jpg" class={"round"} style={{width:"80%"}}/>
                    </div>
                </div>


                <div class={"row"}>
                    <div class={"col-12 text-center"} style={{fontSize:"20px"}}>
                        <p class={"m-3"}>Click here to add new recipes: <span><a href="/recipes/new">Add new recipes</a></span></p>

                    </div>
                </div>
                <div class={"row"}>
                    <div class={"col-12 text-center mb-5"} style={{display:"inline"}}>
                    <p>Click here to view recipes by catergories</p>
                        <form method="GET" action='/recipes'>
                            <select id="options" name="option" >
                                <option value="ByName">Name</option>
                                <option value="ByInstruction">Instruction length</option>
                                <option value="ByIngredients">Number of ingredients</option>
                                <option value="ByID">Number of ID</option>
                            </select>
                            <br/><br/>
                        <button type="submit">Submit to View Recipes</button>
                        </form>
                    </div>
                </div>
          </div>
        </body>
      </html>
    );
  }
}

module.exports = Home;