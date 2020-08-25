const React = require('react');

export default class Edit extends React.Component {
    render(){
        const {id, title, ingredients, instructions} = this.props;
const mystyle = {
      color: "white",
      padding: "10px",
      fontFamily: "Georgia",
      fontFamily: "Montserrat",
      background: 'url("https://images.unsplash.com/photo-1532768907235-78653b7dc71d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1534&q=80")',
      textAlign: "center",


    };


        return (
            <html>
            <body style ={mystyle}>
            <div >
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
            </div>
            </body>
            </html>
            );
    }
}