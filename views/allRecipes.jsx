var React = require('react');
var MainTemplate = require('./mainTemplate');

class AllRecipes extends React.Component {
    render() {

        return (
            <MainTemplate title="All Recipes">
            <div className="allRecipes">
                
                <a href="#"><div className="eachRecipe">
                    <img className="eachRecipeImg" src="https://mtc1-dydfxmh.netdna-ssl.com/wp-content/uploads/2017/06/486-baba-low-nyonya-laksa-1300x929.jpg"/>
                    <div className="eachRecipeDescription"><h5>Singapore Katong Laksa</h5><h6>Hawker it up in your own kitchen and get on our own recipe for laksa, Singapore-style. Beansprouts are optional, and never scrimp on the sambal. Hawker it up in your own kitchen and get on our own recipe for laksa, Singapore-style.</h6>
                    </div>

                </div></a>

                <a href="#"><div className="eachRecipe">
                    <img className="eachRecipeImg" src="https://sethlui.com/wp-content/uploads/2016/01/stingray-1-of-2-2.jpg"/>
                    <div className="eachRecipeDescription"><h5>Sambal Stingray in Banana Leaf</h5><h6>The best sambal stingray in Singapore with awesome chilis and chichalok. BBQ-ed and guaranteed to spice your life up.</h6>
                    </div>
                </div></a>

                <a href="#"><div className="eachRecipe">
                    <img className="eachRecipeImg" src="https://mtc1-dydfxmh.netdna-ssl.com/wp-content/uploads/2017/06/486-baba-low-nyonya-laksa-1300x929.jpg"/>
                    <div className="eachRecipeDescription"><h5>Singapore Katong Laksa</h5><h6>Hawker it up in your own kitchen and get on our own recipe for laksa, Singapore-style. Beansprouts are optional, and never scrimp on the sambal. Hawker it up in your own kitchen and get on our own recipe for laksa, Singapore-style.</h6>
                    </div>

                </div></a>

                <a href="#"><div className="eachRecipe">
                    <img className="eachRecipeImg" src="https://sethlui.com/wp-content/uploads/2016/01/stingray-1-of-2-2.jpg"/>
                    <div className="eachRecipeDescription"><h5>Sambal Stingray in Banana Leaf</h5><h6>The best sambal stingray in Singapore with awesome chilis and chichalok. BBQ-ed and guaranteed to spice your life up.</h6>
                    </div>
                </div></a>

                <a href="#"><div className="eachRecipe">
                    <img className="eachRecipeImg" src="https://mtc1-dydfxmh.netdna-ssl.com/wp-content/uploads/2017/06/486-baba-low-nyonya-laksa-1300x929.jpg"/>
                    <div className="eachRecipeDescription"><h5>Singapore Katong Laksa</h5><h6>Hawker it up in your own kitchen and get on our own recipe for laksa, Singapore-style. Beansprouts are optional, and never scrimp on the sambal. Hawker it up in your own kitchen and get on our own recipe for laksa, Singapore-style.</h6>
                    </div>

                </div></a>

                <a href="#"><div className="eachRecipe">
                    <img className="eachRecipeImg" src="https://sethlui.com/wp-content/uploads/2016/01/stingray-1-of-2-2.jpg"/>
                    <div className="eachRecipeDescription"><h5>Sambal Stingray in Banana Leaf</h5><h6>The best sambal stingray in Singapore with awesome chilis and chichalok. BBQ-ed and guaranteed to spice your life up.</h6>
                    </div>
                </div></a>
                
            </div>
            </MainTemplate>
        )
    }
}

module.exports = AllRecipes;