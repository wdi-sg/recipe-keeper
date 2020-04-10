var React = require('react');

class individual extends React.Component {
  render() {

const editLink= "/recipes/"+this.props.id+"/edit";
const deleteLink = "/recipes/"+ this.props.id + "?_method=delete";
    const ingredient = this.props.ingredients.map((ingredient,index)=>
    {
         let note = "na";

        if(ingredient.notes!=="")
        {
            note=ingredient.notes;
        }
        return <li class={"mt-1 mb-1"}>{ingredient.amount} {ingredient.name} (Special Note: {note})</li>
    })
    return (
      <html>
              <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous" />
        <body>
          <div class={"container mt-5 mb-5 border"} style={{width:"50%"}}>
                <div class={"row"}>
                    <div class={"col-12 text-center"}>
                        <h1>Recipe:{this.props.title}</h1>
                    </div>
                </div>
                <div class={"row"}>
                    <div class={"col-12"}>
                        <ul class={"ml-3"}>
                        {ingredient}
                        </ul>
                    </div>
                </div>
                <div class={"row"}>
                    <div class={"col-12 p-2"}>
                    <h4 class={"ml-5"}>Instructions: <span style={{fontSize:"20px"}}>{this.props.instructions}</span></h4>
                    </div>
                </div>

            <div class={"row"}>
                    <div style={{backgroundColor:"#7C8F8E"}} class={"col-4 border text-center p-3"}>
                        <a style={{fontSize:"40px", color:"white"}} href="/">Home</a>
                    </div>


                <div class={"col-4 border text-center p-0 ml-0"} style={{marginLeft:"0", padding:"0", backgroundColor:"#7C8F8E"}}>
                          <form method="POST" action={deleteLink}>
                    <input  style={{fontSize:"40px", color:"white", backgroundColor:"#7C8F8E", borderColor:"#7C8F8E", width:"95%", marginTop:"10px"}} type="submit" value="Delete"/>
                 </form>
                </div>

                <div style={{backgroundColor:"#7C8F8E"}} class={"col-4 border text-center p-3"}>
                        <a style={{fontSize:"40px", color:"white"}} href={editLink}>Edit</a>
                    </div>

            </div>

            </div>
        </body>
      </html>
    );
  }
}

module.exports = individual;