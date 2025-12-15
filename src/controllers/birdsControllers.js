
const birdsModel = require('../models/birdsModels');

async function getAll(req, res) {
    const { name } = req.query || "";
    const { overallSize } = req.query || "";
    const birds = await birdsModel.getAllBirds(name, overallSize);
    res.render('pages/index', { birds });
}

async function viewBird(req,res) {
   const bird = await birdsModel.getBirdById(req.params.id);
     res.render('pages/birds/view', { bird });
}

function getNewBird(req, res){
    res.render('pages/birds/new');
}

async function postNew(req, res) {
    const { name, spanOfWings, formOfMovement, overallSize, diet } = req.body;
    await birdsModel.addBird(name, spanOfWings, formOfMovement, overallSize, diet
    );
    res.redirect('/');
}

async function getEditBird(req, res) {
    const bird = await birdsModel.getBirdById(req.params.id);
    res.render('pages/birds/edit', { bird });
}

async function postEdit(req, res) {
    const { name, spanOfWings, formOfMovement, overallSize, diet } = req.body;
    await birdsModel.updateBird(req.params.id, name, spanOfWings, formOfMovement, overallSize, diet);
    res.redirect('/');
}

async function deleteBird(req, res) {
    await birdsModel.deleteBird(req.params.id);
    res.redirect('/');
}




module.exports = {getAll, getNewBird, postNew, getEditBird, postEdit, deleteBird, viewBird};