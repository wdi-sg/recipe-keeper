var React = require('react');

class edit extends React.Component {



  render() {

 const ingredient = this.props.ingredients.map( (ingredient, count) => {
                    return <option value={ingredient.name}>{ingredient.name}></option>
                        });
 const amount=["","","","","",""];
 for(let count=0; count<this.props.current.ingredients.length;count++)
 {
    if(this.props.current.ingredients[count].amount!==undefined)
    {
        amount[count]=this.props.current.ingredients[count].amount;
    }
 }

 const notes=["","","","","",""];
 for(let count=0; count<this.props.current.ingredients.length;count++)
 {
    if(this.props.current.ingredients[count].notes!==undefined)
    {
        notes[count]=this.props.current.ingredients[count].notes;
    }
 }

 const firstOption = [<option value="" selected>Select Ingredient...</option>, <option value="" selected>Select Ingredient...</option>, <option value="" selected>Select Ingredient...</option>, <option value="" selected>Select Ingredient...</option>, <option value="" selected>Select Ingredient...</option>, <option value="" selected>Select Ingredient...</option>]

for(let count=0;count<this.props.current.ingredients.length;count++)
{
        if(this.props.current.ingredients[count].name!==undefined)
    {
        firstOption[count]=<option value={this.props.current.ingredients[count].name} selected>{this.props.current.ingredients[count].name}</option>
    }
}

const link = "/recipes/"+this.props.id+"?_method=put";

    return (
      <html>
                  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous" />
        <body>
          <div class={"container mt-4 mb-4 border"}  style={{backgroundColor:"#D6F4F2"}}>

            <div class={"row"}>
                <div class={"col-12 text-center"}>
                    <h1>Edit current receipe</h1>
                </div>
            </div>

             <form method="POST" action={link}>
                <div class={"row"}>
                    <div class="col-3 border text-right">
                            <p class={"mt-3 mb-3"}>Edit Recipes title:</p>
                      </div>
                    <div class="col-9 border">
                      <input type="text" name="title" class={"mt-3 mb-3"}  value={this.props.current.title}  style={{width:"95%"}} required/><br/>
                    </div>
                </div>

                <div class={"row border"}>
                        <div class={"col-12 text-center"}>
                        <h5 class={"mt-3 mb-3"}>Edit ingredient/s with respective quantity if required</h5>
                        </div>
                </div>

                <div class={"row border"}>
                    <div class={"col-3 text-center"}>
                            <h5 class={"mt-3 mb-3"}>Ingredient 1(Required): </h5>
                    </div>
                    <div class={"col-3 text-center"}>
                        <input class={"mt-3 mb-3"} type="text" placeholder="Type in quantity type" name="quantity1" value={amount[0]} required/>
                    </div>
                    <div class={"col-3 text-center"}>
                        <select class={"mt-3 mb-3"} id="options" name="ingredient1" >
                        {firstOption[0]}
                        <option value="">None</option>
                            {ingredient}
                        </select>
                    </div>

                    <div class={"col-3 text-center"}>
                        <input class={"mt-3 mb-3"} type="text" placeholder="Any Notes?" name="specialNote1" value={notes[0]}/>
                    </div>
                </div>


                    <input type="text" placeholder="Type in quantity type" name="quantity2" value={amount[1]}/>
                    <select id="options" name="ingredient2" >
                    {firstOption[1]}
                    <option value="">None</option>
                        {ingredient}
                    </select>
                    <input type="text" placeholder="Any Notes?" name="specialNote2" value={notes[1]}/>


                    <input type="text" placeholder="Type in quantity type" name="quantity3" value={amount[2]}/>
                    <select id="options" name="ingredient3" >
                    {firstOption[2]}
                    <option value="">None</option>
                        {ingredient}
                    </select>
                    <input type="text" placeholder="Any Notes?" name="specialNote3" value={notes[2]}/>



                    <input type="text" placeholder="Type in quantity type" name="quantity4" value={amount[3]}/>
                    <select id="options" name="ingredient4" >
                    {firstOption[3]}
                    <option value="">None</option>
                        {ingredient}
                    </select>
                    <input type="text" placeholder="Any Notes?" name="specialNote4" value={notes[3]}/>

                    <input type="text" placeholder="Type in quantity type" name="quantity5" value={amount[4]}/>
                    <select id="options" name="ingredient5" >
                    {firstOption[4]}
                    <option value="">None</option>
                        {ingredient}
                    </select>
                    <input type="text" placeholder="Any Notes?" name="specialNote5" value={notes[4]}/>


                    <input type="text" placeholder="Type in quantity type" name="quantity6" value={amount[5]}/>
                    <select id="options" name="ingredient6" >
                    {firstOption[5]}
                    <option value="">None</option>
                        {ingredient}
                    </select>
                    <input type="text" placeholder="Any Notes?" name="specialNote6" value={notes[5]}/>


                  <p>Instruction</p>
                  <input type="text" name="instruction" value={this.props.current.instructions} required/>
                  <button type="submit">Submit to Edit</button>



            </form>



          </div>
                       <div>
            <a href="/">Home</a>
            </div>
        </body>
      </html>
    );
  }
}

module.exports = edit;