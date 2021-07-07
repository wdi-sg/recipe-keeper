var React = require ('react');
var DefaultLayout = require ('./default');

class AllRecipes extends React.Component {
    render(){
        const eachRecipe = this.props.all.map ((recipe,index)=>{
        let linkView = `/recipes/${recipe.num}`;
        let linkEdit = `/recipes/${recipe.num}/edit`;

        return  <div key = {index} className="col-md-4">
                  <div className="card mb-4 shadow-sm">
                    <div className="card-body">
                      <div className="card-text">
                        <h2> {recipe.title} </h2>
                            <div className="card-details">
                                <div className="detail-wrapper">
                                    <h4> Prep level: </h4>
                                    <p> {recipe.prep} </p>
                                </div>
                                    <div className="detail-wrapper">
                                        <h4> Cook time: </h4>
                                        <p> {recipe.cook} mins </p>
                                    </div>
                                        <div className="detail-wrapper">
                                            <h4> Ready in: </h4>
                                            <p>{recipe.ready} mins</p>
                                        </div>
                            </div>
                      </div>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                          <button type="button" className="btn btn-sm btn-outline-secondary"> <a href ={linkView} > view </a></button>
                          <button type="button" className="btn btn-sm btn-outline-secondary"><a href ={linkEdit} > edit </a></button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

        })
        return(
            <DefaultLayout>
                            <div className = "py-5">
                                <div className = "container card-wrapper">
                                    <div className = "row">
                            {eachRecipe}
                                    </div>
                                </div>
                            </div>
            </DefaultLayout>
        )
    }
}

module.exports = AllRecipes;




// return <div key={index} className = "col-sm-3 card">
//                         <div className = "detail-wrap">
//                             <h1> {recipe.title} </h1>
//                             <div className = "detail-container">
//                                 <div className = "detail">
//                                     <h2> Prep level: </h2>
//                                     <p> {recipe.prep} </p>
//                                 </div>
//                                 <div className = "detail">
//                                     <h2> Cook Time: </h2>
//                                     <p>  {recipe.cook} mins</p>
//                                 </div>
//                                 <div className = "detail">
//                                     <h2> Ready in: </h2>
//                                     <p>  {recipe.ready} mins</p>
//                                 </div>
//                             </div>
//                                 <a className= "view "href ={link} > view </a>
//                         </div>
//                    </div>