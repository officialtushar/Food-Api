
var Recipes= require('../models/recipes');

const RecipeRoutes = function(app)
{
        // adding the static middle ware 
        
        app.get('/', (req,res) => {
            res.send('<h1>It is working fine</h1>')
        })

        app.post('/recipes' , (req,res) => {
            // res.json('working fine')

            var new_recipe = new Recipes({
                name: req.body.name,
                ingredients: []
            })

            new_recipe.ingredients.push(req.body.ingredient)

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

        });


        app.get('/tasks/:id' , (req,res) => {
            
            Recipes.findById({_id: req.params.id})
            .then((result) => {
                res.json(result);
            })
            .catch((err)=> {
                res.json(err);
            })
        })    
}

module.exports = RecipeRoutes;