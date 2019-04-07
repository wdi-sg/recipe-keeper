var React = require('react');
//Handles rendering for navigation buttons and aside content for now
class Aside extends React.Component{
    render(){
        let inputData = this.props.data
        console.log("inside ASIDE:!")
        console.log(inputData);
        let outList;
        if(inputData.length>0){
            outList = inputData.map(item=>{
                return  <div>
                            <form method="GET" action="/?searchby=category">
                            <input type="hidden" name="searchby" value={item}
                            className="btn btn-info" type="submit"/>
                            </form>
                        </div>

            })
        }

        return(
            <aside>
                <figure>
                    <h4>Category PlayList</h4>
                    {outList}
                </figure>
            </aside>
        );
    }
}

class Navigation extends React.Component{
    render(){
        return(
            <nav>
                <ul class="nav flex-column">
                    <li class="nav-item">
                        <a method="GET" href="/recipe/new"><span class=" glyphicon glyphicon-plus" aria-hidden="true"></span>Add New Recipe</a>
                    </li>
                    <li class="nav-item">
                    <a method="GET" href="/"><span class="glyphicon glyphicon-home" aria-hidden="true"></span> Home</a>
                    </li>
                </ul>
            </nav>




        );
    }
}

class NavAndAside extends React.Component{
    render(){

        const inputData = this.props.data
        return(
            <html>
            <Navigation/>
            <Aside data={inputData}/>
            </html>
        )
    }
}

module.exports = NavAndAside;