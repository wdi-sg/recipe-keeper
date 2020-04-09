var React = require('react');

class edit extends React.Component {



  render() {

 const ingredient = this.props.ingredients.map( (ingredient, count) => {
                    return <option value={ingredient.name}>{ingredient.name}></option>
                        });
 const amount=["","","","","",""];
 for(let count=0; count<amount.length;count++)
 {
    if(this.props.current.ingredients[count].amount!==undefined)
    {
        amount[count]=this.props.current.ingredients[count].amount;
    }
 }

 const notes=["","","","","",""];
 for(let count=0; count<amount.length;count++)
 {
    if(this.props.current.ingredients[count].notes!==undefined)
    {
        notes[count]=this.props.current.ingredients[count].notes;
    }
 }

 const firstOption = [<option value="" selected>Select Ingredient...</option>, <option value="" selected>Select Ingredient...</option>, <option value="" selected>Select Ingredient...</option>, <option value="" selected>Select Ingredient...</option>, <option value="" selected>Select Ingredient...</option>, <option value="" selected>Select Ingredient...</option>]

for(let count=0;count<firstOption.length;count++)
{
        if(this.props.current.ingredients[count].name!==undefined)
    {
        firstOption[count]=<option value={this.props.current.ingredients[count].name} selected>{this.props.current.ingredients[count].name}</option>
    }
}

const link = "/recipes/"+this.props.id+"?_method=put";

    return (
      <html>
        <body>
          <div>
             <form method="POST" action={link}>
                  <p>Recipes title:</p>
                  <input type="text" name="title" value={this.props.current.title} required/><br/>

                  <p>Choose ingredient/s with respective quantity if required</p><br/>
                    <input type="text" placeholder="Type in quantity type" name="quantity1" value={amount[0]} required/>
                    <select id="options" name="ingredient1" >
                    {firstOption[0]}

                        {ingredient}
                    </select>
                    <input type="text" placeholder="Any Notes?" name="specialNote1" value={notes[0]}/>



                    <input type="text" placeholder="Type in quantity type" name="quantity2" value={amount[1]}/>
                    <select id="options" name="ingredient2" >
                    {firstOption[1]}
                        {ingredient}
                    </select>
                    <input type="text" placeholder="Any Notes?" name="specialNote2" value={notes[1]}/>


                    <input type="text" placeholder="Type in quantity type" name="quantity3" value={amount[2]}/>
                    <select id="options" name="ingredient3" >
                    {firstOption[2]}
                        {ingredient}
                    </select>
                    <input type="text" placeholder="Any Notes?" name="specialNote3" value={notes[2]}/>



                    <input type="text" placeholder="Type in quantity type" name="quantity4" value={amount[3]}/>
                    <select id="options" name="ingredient4" >
                    {firstOption[3]}
                        {ingredient}
                    </select>
                    <input type="text" placeholder="Any Notes?" name="specialNote4" value={notes[3]}/>

                    <input type="text" placeholder="Type in quantity type" name="quantity5" value={amount[4]}/>
                    <select id="options" name="ingredient5" >
                    {firstOption[4]}
                        {ingredient}
                    </select>
                    <input type="text" placeholder="Any Notes?" name="specialNote5" value={notes[4]}/>


                    <input type="text" placeholder="Type in quantity type" name="quantity6" value={amount[5]}/>
                    <select id="options" name="ingredient6" >
                    {firstOption[5]}
                        {ingredient}
                    </select>
                    <input type="text" placeholder="Any Notes?" name="specialNote6" value={notes[5]}/>


                  <p>Instruction</p>
                  <input type="text" name="instruction" value={this.props.current.instructions} required/>
                  <button type="submit">Submit to Edit</button>
            </form>



          </div>
        </body>
      </html>
    );
  }
}

module.exports = edit;