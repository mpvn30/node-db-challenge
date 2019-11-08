const router = require('express').Router();
const db = require('./tasks-model.js');

//GET
router.get('/', (req,res) => {
    db.get()
        .then(projects => {
            res.status(200).json(projects);
        })
        .catch(error => {
            console.log(error)
            res.status(500).json({error: `ERROR GETTING TASKS `})
        })
})

//GET by ID
router.get('/:id', (req,res) => {
    const {id} = req.params
    db.getById(id)
        .then(project => {
            if(project){
                res.status(200).json(project);
            }
            else{
                res.status(404).json({message: `ERROR GETTING TASKS `})
            }
        })
})

//POST
router.post('/', (req,res) => {
    const { description, notes, project_id } = req.body
    db.insert({ description, notes, project_id })
        .then(project => {
            console.log(project);
            res.status(200).json(project);
        })
        .catch(error => {
            console.log(error);
            res.status(500).json({error: `ERROR POSTING TASK! `})
        });
})

module.exports = router; 