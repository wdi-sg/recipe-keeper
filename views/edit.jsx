const React = require('react');

export default class Edit extends React.Component {
    render(){
        const {id, title, ingredients, instructions} = this.props;




        return (
            <form method ="POST" action={`/recipes/${id}?_method=put`} >
                Recipe ID<input type="text" name="id" value ={id}/>
               <br/>
               <br/>
                Title<input type="text" name="title" value ={title}/>
               <br/>
               <br/>
               Ingredients <input type="text" name="ingredient" value ={ingredients}/>
               <br/>
               <br/>
               Instructions<input type="text" name="instructions" value ={instructions}/>
               <br/>
               <br/>

               <input type="submit" value="Submit"/>
            </form>
            );
    }
}