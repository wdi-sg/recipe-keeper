app.post('/recipes',(request,response) =>{
    console.log("added");
    //response.send("Successfully added recipe");
    jsonfile.readFile(file,(err,obj) =>{
        if(err){
        response.send(err);
        return;
    }
        const recipes = obj.recipes;
        recipes.push(request.body);
        //response.send(request.body);
        jsonfile.writeFile(file, obj, (err) => {
            //response.send("successful");
        const link ='/recipes/'+ recipes.length;
        response.redirect(link);
        })
    })
});
//INITIAL ROUTE
app.get('/', (request, response) => {
     response.redirect('/recipes/');
 })
//  DISPLAY ALL RECIPES
 app.get('/recipes/', (request,response)=>{
    jsonfile.readFile(file, (err,obj)=>{
        const dataName = {
            recipes: obj.recipes
        }
        response.render('home',dataName);
    })

});
 //DISPLAY FORM FOR A NEW RECIPE
app.get('/recipes/new',(request,response) =>{
    response.render('add');
});
//DISPLAY INDIVIDUAL RECIPE
app.get('/recipes/:id', (request,response) =>{
    jsonfile.readFile(file, (err,obj)=>{
        const index = parseInt(request.params.id);
        const data = {
                id: index,
                name: obj.recipes[index-1].name,
                ingredients: obj.recipes[index-1].ingredients,
                instructions: obj.recipes[index-1].instructions
            }
        response.render('show', data);
    })
    console.log("before entering edit");
});
//DISPLAY FORM FOR EDITING RECIPE
app.get('/recipes/:id/edit', (request, response) => {
     //read file
     jsonfile.readFile(file, (err, obj) => {
         const index = parseInt(request.params.id) - 1;
         const data = {
             id : index + 1,
             name: obj.recipes[index].name,
             ingredients: obj.recipes[index].ingredients,
             instructions: obj.recipes[index].instructions
         }
         response.render('edit', data);