
const birdsModel = require('../models/birdsModels');
const state = require('../state');

async function getAll(req, res) {
    const { name = '', diet = '', sort = 'createdAt', order = 'desc' } = req.query || {};
    const birds = await birdsModel.getAllBirds(name, diet, sort, order);
    res.status(200).render('pages/index', { birds, currentUser: await state.getCurrentUser(), name, diet, sort, order });
}

async function viewBird(req,res) {
   const bird = await birdsModel.getBirdById(req.params.id);
     res.status(200).render('pages/birds/view', { bird });
}

async function getNewBird(req, res){
    res.status(200).render('pages/birds/new', {currentUser: await state.getCurrentUser()});
}

async function postNewBird(req, res) {
    const { name, spanOfWings, formOfMovement, overallSize, diet, addedBy } = req.body;
    const addedByClean = addedBy ? addedBy.trim() : 'guest';
    await birdsModel.addBird(name, spanOfWings, formOfMovement, overallSize, diet, addedByClean);
    res.status(302).redirect('/');
} 

async function getEditBird(req, res) {
    const bird = await birdsModel.getBirdById(req.params.id);
    res.status(200).render('pages/birds/edit', { bird });
}

async function postEdit(req, res) {
    const { name, spanOfWings, formOfMovement, overallSize, diet } = req.body;
    await birdsModel.updateBird(req.params.id, name, spanOfWings, formOfMovement, overallSize, diet);
    res.status(302).redirect('/');
}

async function deleteBird(req, res) {
    await birdsModel.deleteBird(req.params.id);
    res.status(302).redirect('/');
}




module.exports = {getAll, getNewBird, postNewBird, getEditBird, postEdit, deleteBird, viewBird};