const React = require('react');
const Layout = require('./layout');

class Home extends React.Component {
    render() {
// function to generate cards
        const recipeArray = this.props.recipes;
        const cards = recipeArray.map(eachRecipe=>{
            let urlField = "";
            eachRecipe.url === undefined ? urlField = "" : urlField = eachRecipe.url;
            return (
                <div className="card">
                    <img src={urlField} className="card-img"/>
                    <div className="d-flex justify-content-center card-img-overlay" style={{backgroundColor: 'rgba(255, 255, 255, 0.5)'}}>
                        <h5 className="align-self-center card-title">{eachRecipe.title}</h5>
                    </div>
                    <p className="card-text d-flex justify-content-center">
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </p>
                </div>
                );
        });
// html tags to render
        return (
            <Layout>
                <div className="card-columns">
                    {cards}
                </div>
            </Layout>
        );
    };
};

module.exports = Home;