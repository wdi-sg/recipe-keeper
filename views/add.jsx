var React = require('react');

class add extends React.Component {



  render() {



 const ingredient = this.props.ingredients.map( (ingredient, count) => {
                    return <option value={ingredient.name}>{ingredient.name}></option>
                        });
    return (
      <html>
        <body>
          <div>
             <form method="POST" action="/recipes">
                  <p>Recipes title:</p>
                  <input type="text" name="title" required/><br/>

                  <p>Choose ingredient/s with respective quantity if required</p><br/>
                    <input type="text" placeholder="Type in quantity type" name="quantity1"  required/>
                    <select id="options" name="ingredient1" >
                    <option value="" selected>Select Ingredient...</option>
                        {ingredient}
                    </select>
                    <input type="text" placeholder="Any Notes?" name="specialNote1"/>



                    <input type="text" placeholder="Type in quantity type" name="quantity2"/>
                    <select id="options" name="ingredient2" >
                    <option value="" selected>Select Ingredient...</option>
                        {ingredient}
                    </select>
                    <input type="text" placeholder="Any Notes?" name="specialNote2"/>


                    <input type="text" placeholder="Type in quantity type" name="quantity3"/>
                    <select id="options" name="ingredient3" >
                    <option value="" selected>Select Ingredient...</option>
                        {ingredient}
                    </select>
                    <input type="text" placeholder="Any Notes?" name="specialNote3"/>



                    <input type="text" placeholder="Type in quantity type" name="quantity4"/>
                    <select id="options" name="ingredient4" >
                    <option value="" selected>Select Ingredient...</option>
                        {ingredient}
                    </select>
                    <input type="text" placeholder="Any Notes?" name="specialNote4"/>

                    <input type="text" placeholder="Type in quantity type" name="quantity5"/>
                    <select id="options" name="ingredient5" >
                    <option value="" selected>Select Ingredient...</option>
                        {ingredient}
                    </select>
                    <input type="text" placeholder="Any Notes?" name="specialNote5"/>


                    <input type="text" placeholder="Type in quantity type" name="quantity6"/>
                    <select id="options" name="ingredient6" >
                    <option value="" selected>Select Ingredient...</option>
                        {ingredient}
                    </select>
                    <input type="text" placeholder="Any Notes?" name="specialNote6"/>


                  <p>Instruction</p>
                  <input type="text" name="instruction"required/>
                  <button type="submit">Submit</button>
            </form>



          </div>
        </body>
      </html>
    );
  }
}

module.exports = add;