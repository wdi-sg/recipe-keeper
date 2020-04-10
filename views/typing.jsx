var React = require('react');

class typing extends React.Component {
  render() {
    let IdArray=[];
    let titleArray=[];
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
    for(let count=0;count<keyArray.length;count++){

        ingredientArray.push(<p>{keyArray[count]}</p>);

        for(let innercount=0;innercount<IdArray[count].length;innercount++)
        {
            let url="/recipes/"+IdArray[count][innercount];
            ingredientArray.push(<li><a href={url}>{titleArray[count][innercount]}</a></li>);
        }
        //ingredientArray.push(</ul>);
    }
    console.log(ingredientArray);
    return (
      <html>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous" />
        <body>

            <div>
            {ingredientArray}
            </div>
                                <div style={{backgroundColor:"#7C8F8E"}} class={"col-4 border text-center p-3"}>
                        <a style={{fontSize:"40px", color:"white"}} href="/">Home</a>
                    </div>
        </body>
      </html>
    );
  }
}

module.exports = typing;