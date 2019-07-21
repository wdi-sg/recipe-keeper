var React = require('react');
var DefaultLayout = require('./layouts/default');

class Home extends React.Component {
    render() {
        let recipes = this.props.recipes;
            return(
                <DefaultLayout>
                    <div  className="row">
                        <div className="col-12">
                            <form>
                                <div className="input-group">
                                    <select className="form-control" name="sortby">
                                        <option value="id">ID</option>
                                        <option value="title">Dish Name</option>
                                        <option value="date">Date</option>
                                    </select>
                                    <div className="input-group-append">
                                        <button className="btn btn-dark">Sort By</button>
                                    </div>
                                </div>
                            </form>
                            <a href="../recipes/new" className="btn btn-primary mt-3">Add New Recipe</a>
                            </div>
                         </div>
                    <div className="row">
                        <div className= "col-12">
                            <div className="row">
                                {recipes}
                            </div>
                        </div>
                    </div>
                </DefaultLayout>
            )
    // });
}
}

module.exports = Home;