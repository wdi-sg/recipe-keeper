var React = require('react');

class add extends React.Component {



  render() {



 const ingredient = this.props.ingredients.map( (ingredient, count) => {
                    return <option value={ingredient.name}>{ingredient.name}></option>
                        });
    return (
      <html>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous" />
        <body>

          <div class={"container mt-4 mb-4"} style={{backgroundColor:"#D6F4F2"}}>
            <div class={"row"}>
                <div class={"col-12 text-center"}>
                    <h1>Enter a new receipe</h1>
                </div>
            </div>
             <form method="POST" action="/recipes">
                <div class={"row"}>
                <div class="col-3 border text-right">
                        <p class={"mt-3 mb-3"}>Enter Recipes title:</p>
                  </div>
                  <div class="col-9 border">
                        <input type="text" name="title" class={"mt-3 mb-3"} style={{width:"95%"}} required/><br/>
                </div>
                </div>

                <div class={"row border"}>
                    <div class={"col-12 text-center"}>
                    <h5 class={"mt-3 mb-3"}>Choose ingredient/s with respective quantity if required</h5>
                    </div>
                  </div>

                <div class={"row border"}>
                    <div class={"col-3 text-center"}>
                            <h5 class={"mt-3 mb-3"}>Ingredient 1(Required): </h5>
                    </div>

                    <div class={"col-3 text-center"}>
                        <input type="text" class={"mt-3 mb-3"} placeholder="Type in quantity type" name="quantity1"  required/>
                    </div>

                    <div class={"col-3 text-center"}>
                        <select class={"mt-3 mb-3"} id="options" name="ingredient1" >
                        <option value="" selected>Select Ingredient...</option>
                            {ingredient}
                        </select>
                    </div>

                    <div class={"col-3 text-center"}>
                        <input class={"mt-3 mb-3"} type="text" placeholder="Any Notes?" name="specialNote1"/>
                    </div>

                </div>

                <div class={"row border"}>
                    <div class={"col-3 text-center"}>
                            <h5 class={"mt-3 mb-3"}>Ingredient 2: </h5>
                    </div>

                    <div class={"col-3 text-center"}>
                    <input class={"mt-3 mb-3"} type="text" placeholder="Type in quantity type" name="quantity2"/>
                    </div>

                    <div class={"col-3 text-center"}>
                        <select class={"mt-3 mb-3"} id="options" name="ingredient2" >
                        <option value="" selected>Select Ingredient...</option>
                            {ingredient}
                        </select>
                    </div>

                    <div class={"col-3 text-center"}>
                        <input class={"mt-3 mb-3"} type="text" placeholder="Any Notes?" name="specialNote2"/>
                    </div>

                </div>

                <div class={"row border"}>
                    <div class={"col-3 text-center"}>
                            <h5 class={"mt-3 mb-3"}>Ingredient 3: </h5>
                    </div>

                    <div class={"col-3 text-center"}>
                    <input class={"mt-3 mb-3"} type="text" placeholder="Type in quantity type" name="quantity3"/>
                    </div>

                    <div class={"col-3 text-center"}>
                    <select class={"mt-3 mb-3"} id="options" name="ingredient3" >
                    <option value="" selected>Select Ingredient...</option>
                        {ingredient}
                    </select>
                    </div>

                    <div class={"col-3 text-center"}>
                    <input class={"mt-3 mb-3"} type="text" placeholder="Any Notes?" name="specialNote3"/>
                    </div>

                </div>

                <div class={"row border"}>
                    <div class={"col-3 text-center"}>
                            <h5 class={"mt-3 mb-3"}>Ingredient 4: </h5>
                    </div>

                    <div class={"col-3 text-center"}>
                    <input type="text" class={"mt-3 mb-3"} placeholder="Type in quantity type" name="quantity4"/>
                    </div>

                    <div class={"col-3 text-center"}>
                    <select id="options" class={"mt-3 mb-3"} name="ingredient4" >
                    <option value="" selected>Select Ingredient...</option>
                        {ingredient}
                    </select>
                    </div>

                    <div class={"col-3 text-center"}>
                    <input type="text" class={"mt-3 mb-3"} placeholder="Any Notes?" name="specialNote4"/>
                    </div>

                </div>

                <div class={"row border"}>
                    <div class={"col-3 text-center"}>
                            <h5 class={"mt-3 mb-3"}>Ingredient 5: </h5>
                    </div>

                    <div class={"col-3 text-center"}>
                    <input type="text" class={"mt-3 mb-3"} placeholder="Type in quantity type" name="quantity5"/>
                    </div>

                    <div class={"col-3 text-center"}>
                    <select id="options" class={"mt-3 mb-3"} name="ingredient5" >
                    <option value="" selected>Select Ingredient...</option>
                        {ingredient}
                    </select>
                    </div>

                    <div class={"col-3 text-center"}>
                    <input type="text" class={"mt-3 mb-3"} placeholder="Any Notes?" name="specialNote5"/>
                    </div>

                </div>

                <div class={"row border"}>
                    <div class={"col-3 text-center"}>
                            <h5 class={"mt-3 mb-3"}>Ingredient 6: </h5>
                    </div>

                    <div class={"col-3 text-center"}>
                    <input type="text" class={"mt-3 mb-3"} placeholder="Type in quantity type" name="quantity6"/>
                    </div>

                    <div class={"col-3 text-center"}>
                    <select id="options" class={"mt-3 mb-3"} name="ingredient6" >
                    <option value="" selected>Select Ingredient...</option>
                        {ingredient}
                    </select>
                    </div>

                    <div class={"col-3 text-center"}>
                    <input type="text" class={"mt-3 mb-3"} placeholder="Any Notes?" name="specialNote6"/>
                    </div>

                </div>

                <div class={"row"}>
                    <div class="col-3 border text-right">
                            <p class={"mt-3 mb-3"}>Enter Instructions:</p>
                      </div>
                      <div class="col-9 border">
                            <input type="text" name="instruction" class={"mt-3 mb-3"} style={{width:"95%"}} required/><br/>
                    </div>
                </div>

                <div class={"row border"}>
                    <div class={"col-12 text-center"}>
                        <button class={"mt-3 mb-3"} type="submit">Submit</button>
                  </div>
                </div>
            </form>

                <div class={"row border"}>
                    <div class={"col-12 text-center"}>
                        <p class={"p-3"}>Click here to go back <span><a href="/">Home</a></span></p>

                    </div>
                </div>


          </div>

        </body>
      </html>
    );
  }
}

module.exports = add;