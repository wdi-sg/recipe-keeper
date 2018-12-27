var React = require('react');
var DefaultLayout = require('./recipecss');

class Recipelist extends React.Component{
    render(){
        return(
            <div className="recipemain">

            <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div className="modal-dialog" role="document">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title text-danger" id="exampleModalLabel">WARNING!</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div className="modal-body text-danger">
                    You are about to delete a recipe from the database. Click <strong>close</strong> to return to main menu or click <strong>confirm</strong> to proceed with the deletion.
                  </div>
                  <div className="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    <form method="POST" action={"/recipe/" + this.props.list.id + "?_method=delete"}>
                        <button type="submit" value="Delete" class="btn btn-primary">Confirm</button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
                <div className="homecont">
                    <ul>
                        Title: {this.props.list.name} <br />
                        <form method="GET" action={"/recipe/" + this.props.list.id + "/details"}>
                            <input type="submit" className="details" value="Details" />
                        </form>
                        <form method="GET" action={"/recipe/" + this.props.list.id + "/edit"}>
                            <input type="submit" className="edit" value="Edit recipe" />
                        </form>
                        <input type="submit" className="delete" value="Delete" data-toggle="modal" data-target="#exampleModal"/>
                    </ul>
                </div>
            </div>
            );
    }
}

class Recipehome extends React.Component{
    render(){
        const recipes = this.props.list.map( recipe => {
            return <Recipelist list={recipe}></Recipelist>;
        });
        return(
            <DefaultLayout>
                <div className="recipemain">
                    <h1>Welcome to Seany's recipe list here are the list of recipes currently available</h1>
                    <form method="GET" action="/recipe">
                        <select name="sortby">
                            <option value="id">ID</option>
                            <option value="asc">Name ascending order</option>
                            <option value="desc">Name descending order</option>
                            <option value="dc">Date created latest</option>
                            <option value="de">Date edited latest</option>
                        </select>
                        <span> </span>
                        <input type="submit" value="sort" />
                    </form> <br />
                    <form method="GET" action="/recipe/new">
                        <input type="submit" className="cn" value="Create new" />
                    </form>
                    <form method="GET" action="/recipe/ingredients">
                        <input type="submit" className="inghm" value="Ingredients" />
                    </form>
                    {recipes}
                </div>
            </DefaultLayout>
            );
    }
}

module.exports = Recipelist;
module.exports = Recipehome;