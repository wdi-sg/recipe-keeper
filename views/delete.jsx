
const React = require('react');

export default class Delete extends React.Component {
    render(){
        const {id, title, ingredients, instructions} = this.props;




        return (
            <form method ="POST" action={`/recipes/${id}?_method=delete`} >
                Recipe ID<input type="text" name="id" placeholder ={id}/>
               <br/>
               <br/>
                Title<input type="text" name="title"placeholder ={title}/>
               <br/>
               <br/>
               Ingredients <input type="text" name="ingredient" placeholder ={ingredients}/>
               <br/>
               <br/>
               Instructions<input type="text" name="instructions"placeholder ={instructions}/>
               <br/>
               <br/>

               <input type="submit" value="Delete this recipe"/>
            </form>
            );
    }
}