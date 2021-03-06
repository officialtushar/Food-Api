
var Recipes= require('../models/recipes');

const RecipeRoutes = function(app)
{
        // adding the static middle ware 

        app.get('/check', (req,res) => {
            res.send('Food Recipe App');
        })
        app.post('/recipes' , (req,res) => {
            // res.json('working fine')

            console.log(req.body);

            var new_recipe = new Recipes({
                name: req.body.name,
                ingredients: []
            })

            // res.json(new_task);
            new_recipe.save()
            .then((result) => {
                if(result)
                {
                    res.json(result);
                }
            })
            .catch((err)=> {
                res.json(err);
            });

        })

        // app.get('/tasks',(req,res)=> {
        app.get('/recipes', (req,res) => {
            Recipes.find({}).then((result) => {
                res.json(result);
            })
            .catch((err) => {
                res.json(err);
            })
        })


        // removing the task with separate id
        app.delete('/recipes/:id', (req,res) => {

            Recipes.findOneAndDelete({_id: req.params.id})
            .then((result) => {
                console.log(result);
                res.json(result);
            })
            .catch((err) => {
                res.json(err);
                
            })
        });


        // finding and updating the task 
        app.put('/recipes/:id', (req,res) => {
            console.log('inside the node')
            console.log('name', req.body.name)
            console.log('ingredients', req.body.ingredients)
           
           Recipes.findOneAndUpdate({_id: req.params.id}, {
               $set: {
                   name: req.body.name,
                   ingredients: req.body.ingredients
               }
           }).then((result) => {
               res.json(result);
           })
            
        });


        app.get('/recipes/:id' , (req,res) => {

            console.log(req.params.id);
            
            Recipes.findById({_id: req.params.id})
            .then((result) => {
                res.json(result);
            })
            .catch((err)=> {
                console.log('cast error',err);
                res.json(err);
            })
        })  
        
        app.put('/updateRecipies', (req,res) => {
            
        })
}

module.exports = RecipeRoutes;