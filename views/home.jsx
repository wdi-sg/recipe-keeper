const React = require('react');
const Layout = require('./layout');

class Home extends React.Component {
    render() {
// function to generate cards
        const recipeArray = this.props.recipes;
        const cards = recipeArray.map((eachRecipe, index)=>{
            let urlField = eachRecipe.url === undefined ? "" : eachRecipe.url;
            return (
                <div className="card">
                    <img src={urlField} className="card-img"/>
                    <div className="d-flex justify-content-center card-img-overlay" style={{backgroundColor: 'rgba(255, 255, 255, 0.3)'}}>
                        <h5 className="align-self-center card-title">{eachRecipe.title}</h5>
                    </div>
                    <p className="card-text d-flex justify-content-center">
                        <small className="text-muted">{eachRecipe.date}</small>
                    </p>
                    <a className="stretched-link" href={"/recipes/"+index}/>
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