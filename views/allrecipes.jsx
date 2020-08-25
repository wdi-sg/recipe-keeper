var React = require('react');

export default class Allrecipes extends React.Component {
  render() {
    let {title} = this.props;
    //sort function if applicable.
//     this.props.sort(function(a, b){
//     if(a.title < b.title) { return -1; }
//     if(a.title > b.title) { return 1; }
//     return 0;
// })
let titleList = title.map((item,index)=>{
    return <li><a href={`/recipes/${index}`}>{item}</a></li>
});

        return (
            <html>
                <head>
                    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossOrigin="anonymous"></link>
                </head>
                <body style={{ backgroundColor: "#B2238A" }}>

                    <div className="container mw-50 w-50">
                        <h1 className="text-center font-italic">Recipe List</h1>


                        <div className="card text-center text-black bg-dark mb-4">
                            <div className="card-body">
                                <h5 className="card-title text-center">{titleList}</h5>

                            </div>
                        </div>

                        <div className="container-fluid text-center">
                            <div className="row d-flex justify-content-around">
                                <div className="col-6-md">
                                    <a href={`/recipes/0/edit`} className="btn btn-warning btn-block h-auto mr-2 ">Edit Recipe</a>
                                </div>
                                <div className="col-6-md">
                                    <form method="POST" action={`/recipes/0/delete?_method=delete`}>
                                        <button type="submit" className="btn btn-danger btn-block ml-2 ">Delete Recipe</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </body>
            </html>
        );
  }
}







