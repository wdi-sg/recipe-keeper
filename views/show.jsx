const React = require('react');
const Layout = require('./layout');

class Show extends React.Component {
    render() {
// grab and destructure recipe object
        let {title, ingredients, url, instructions, id} = this.props;
// format ingredients list
        let ingredientsArray = ingredients.split(',');
// map onto the <li> array
        let listTag = ingredientsArray.map(element=>{
            return <li>{element}</li>
        });
        return (
            <Layout>

                <div className="row">
                    <div className="col-8">
                        <h1 className="display-4">{title}</h1>
                        <hr className="my-4"/>
                        <strong>Ingredients</strong>
                        <ul>
                            {listTag}
                        </ul>
                    </div>
                    <div className="col-4"><img src={url} className="img-fluid"/></div>
                    <div className="col-12">
                        <hr className="my-4"/>
                        <p className="lead">{instructions}</p>
                    </div>
                </div>

                <div className="row">
                    <div className="col">
                        <form method="GET" action={"/recipes/"+id+"/edit"}>
                            <input type="submit" className="btn btn-warning btn-block" value="Edit"/>
                        </form>
                    </div>
                    <div className="col">
                        <form method="POST" action={"/recipes/"+id+"?_method=delete"}>
                            <input type="submit" className="btn btn-danger btn-block" value="Delete"/>
                        </form>
                    </div>
                </div>
            </Layout>
        );
    };
};

module.exports = Show;