var React = require('react');

class index extends React.Component {
  render() {
    const recipe = this.props.recipes.map((recipe,index)=>
    {
        const link = '/recipes/'+ recipe.id;
        return <div class={"col-4 text-center p-5 border"}>
        <h3 class={"mt-3 mb-3"}>{recipe.title}</h3>
        <a href={link}>Click here for more details</a>
        </div>
    })
    return (
      <html>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous" />
        <body>
        <nav class={"navbar navbar-expand-lg border"} style={{backgroundColor:"#3585FF", color:"black"}}>

            <button class={"navbar-toggler borer"} type={"button"} data-toggle={"collapse"} data-target={"#navbarNavAltMarkup"} aria-controls={"navbarNavAltMarkup"} aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                    <a class="nav-item nav-link active border" style={{color:"black"}} href="/">Home <span class="sr-only">(current)</span></a>
                    <a class="nav-item nav-link border" style={{color:"black"}} href="/recipes/new">Add</a>
                    <a class="nav-item nav-link border" style={{color:"black"}} href="/ingredients">View Ingredients</a>

                </div>
                </div>
        </nav>

          <div class={"container mt-5"}>
            <div class={"row"}>
            <div class={"col-12 text-center"} style={{backgroundColor:"#1D40A5", color:"white"}}>
            <h1 class={"mt-4 mb-4"}>{this.props.heading}</h1>
            </div>
            </div>

            <div class={"row border"}>
            {recipe}
            </div>

            <div class={"row"}>
            <div class={"col-12 text-center p-5"} style={{backgroundColor:"#1D40A5"}}>
            <p style={{fontSize:"30px",color:"#FFF"}}>Click <span><a style={{color:"#777"}} href="/recipes/new">here</a></span> to add new recipes</p>
            </div>
            </div>

            <div class={"row"}>
            <div class={"col-12 text-center border"}>
            <p style={{fontSize:"30px",color:"#000"}}>Click <span><a style={{color:"#285EFD"}} href="/">here</a></span> to return home</p>

            </div>
            </div>
            </div>
        </body>
      </html>
    );
  }
}

module.exports = index;