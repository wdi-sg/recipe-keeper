var React = require('react');

class typing extends React.Component {
  render() {
    let IdArray=[];
    let titleArray=[];
    var something=<div class={"col-4"}>;
    </div>

    for (var key in this.props)
    {
        let IdInnerArray=[];
        let titleInnerArray=[];
        if(key!=="settings"&&key!=="_locals"&&key!=="cache"){
                //console.log(key);
                console.log(this.props[key]);
                for(let count=0;count<this.props[key].length;count++)
                {

                    IdInnerArray.push(this.props[key][count].id);
                    titleInnerArray.push(this.props[key][count].title)
                    //console.log("##############Testing id")
                    //console.log(this.props[key][count].id);
                }
                IdArray.push(IdInnerArray);
                titleArray.push(titleInnerArray);
            }
    }
    let keyArray=Object.keys(this.props);
    //console.log(keyArray);
    for(let count=0; count<keyArray.length;count++)
    {
        if(keyArray[count]==="settings"||keyArray[count]==="_locals"||keyArray[count]==="cache")
        {
            keyArray.splice(count,1);
        }
    }
    keyArray.pop();
    console.log(keyArray);
    console.log(IdArray);
    console.log(titleArray);

    let ingredientArray=[];

    for(let count = 0 ; count < keyArray.length;count ++){

        ingredientArray.push(<p>{keyArray[count]}</p>);

        for(let innercount=0;innercount<IdArray[count].length;innercount++)
        {
            let url="/recipes/"+IdArray[count][innercount];
            ingredientArray.push(<li><a href={url}>{titleArray[count][innercount]}</a></li>);
        }

            }


    console.log(ingredientArray);
    return (
      <html>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous" />
        <body>
        <nav class={"navbar navbar-expand-lg border"} style={{backgroundColor:"#3585FF", color:"black"}}>

            <button class={"navbar-toggler borer"} type={"button"} data-toggle={"collapse"} data-target={"#navbarNavAltMarkup"} aria-controls={"navbarNavAltMarkup"} aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                    <a class="nav-item nav-link active border" style={{color:"black"}} href="/">Home <span class="sr-only">(current)</span></a>
                    <a class="nav-item nav-link border" style={{color:"black"}} href="/recipes/new">Add</a>
                    <a class="nav-item nav-link border" style={{color:"black"}} href="/recipes/index">Recipes</a>

                </div>
                </div>
        </nav>

            <div>
                {ingredientArray}
                </div>
            <div class={"container"}>
                <div class={"row"}>
                {ingredientArray}
                </div>
                <div class={"row"}>
                        <div style={{backgroundColor:"#7C8F8E"}} class={"col-12 border text-center p-3"}>
                        <a style={{fontSize:"30px", color:"white"}} href="/">Home</a>
                    </div>
                </div>

                </div>

        </body>
      </html>
    );
  }
}

module.exports = typing;