
const React = require('react');

export default class New extends React.Component {
    render(){




        return (
            <form method ="POST" action={`/recipes`} >
                Recipe ID<input type="text" name="id"/>
               <br/>
               <br/>
                Title<input type="text" name="title"/>
               <br/>
               <br/>
               Ingredients <input type="text" name="ingredient"/>
               <br/>
               <br/>
               Instructions<input type="text" name="instructions"/>
               <br/>
               <br/>
               <input type="hidden" name="date/>
               <br/>

               <input type="submit" value="Submit"/>
            </form>
            );
    }
}