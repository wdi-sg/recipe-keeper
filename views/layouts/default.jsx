var React = require('react');
const file = require('../../data.json');


class DefaultLayout extends React.Component {
  render() {
    const listOfDishName = file.recipe.map(item=>{
        let index = item.id;
        let url = '/recipes/'+index;
        return <li><a href={url}>{item.title}</a></li>
    })
    var listOfUtensils = [];
    var checkUtensils = [];
    for(let i=0;i<file.recipe.length;i++){
        for(let j=0;j<file.recipe[i].utensils.length;j++){
            let url = '/recipes?something='+file.recipe[i].utensils[j];
            if(checkUtensils.includes(file.recipe[i].utensils[j])){
                console.log("Do nothing");
            }else{
                listOfUtensils.push(<li><a href={url}>{file.recipe[i].utensils[j]}</a></li>)
                checkUtensils.push(file.recipe[i].utensils[j]);
            }
        }
    }


    var listOfSeasonings = [];
    var checkSeasonings = [];
    for(let i=0;i<file.recipe.length;i++){
        for(let j=0;j<file.recipe[i].seasonings.length;j++){
            if(checkSeasonings.includes(file.recipe[i].seasonings[j])){
                console.log("none");
            }else{
                let url = '/recipes?something='+file.recipe[i].seasonings[j];
                listOfSeasonings.push(<li><a href={url}>{file.recipe[i].seasonings[j]}</a></li>)
                checkSeasonings.push(file.recipe[i].seasonings[j]);
            }
        }
    }

    var listOfIngredients = [];
    var checkIngredients = [];
    for(let i=0;i<file.recipe.length;i++){
        for(let j=0;j<file.recipe[i].ingredients.length;j++){
            if(checkIngredients.includes(file.recipe[i].ingredients[j])){
                console.log("none");
            }else{
                let url = '/recipes?something='+file.recipe[i].ingredients[j];
                listOfIngredients.push(<li><a href={url}>{file.recipe[i].ingredients[j]}</a></li>);
                checkIngredients.push(file.recipe[i].ingredients[j]);
            }
        }
    }

    return (
      <html>
        <head>
            <title>{this.props.title}</title>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"/>
            <link rel="stylesheet" type="text/css" href="/css/style.css"/>
        </head>
        <body>
        <nav class="navbar navbar-expand-lg nav-bg">
          <a class="navbar-brand" href="/recipes">Harvest Moon</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item active">
                <a class="nav-link" href="/recipes/new">Add <span class="sr-only">(current)</span></a>
              </li>

            </ul>
          </div>
        </nav>
        <div className="main-container">
            <div className="side-bar">
                <h4>Dishes</h4>
                <hr/>
                {listOfDishName}
                <hr/>
                <h4>Utensils</h4>
                <hr/>
                {listOfUtensils}
                <hr/>
                <h4>Seasonings</h4>
                <hr/>
                {listOfSeasonings}
                <hr/>
                <h4>ingredients</h4>
                <hr/>
                {listOfIngredients}
            </div>
            <div className="main-content">
                {this.props.children}
            </div>
        </div>
        <footer>
            <p>Follow us on:</p>
            <img id="footer-image" src="/images/footer.png"/>
        </footer>
            <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossOrigin="anonymous"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossOrigin="anonymous"></script>
            <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossOrigin="anonymous"></script>

        </body>

      </html>
    );
  }
}

module.exports = DefaultLayout;