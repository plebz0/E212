const { ObjectId } = require('mongodb');
const { getDB } = require('../data/connection');

function isPositiveNumber(value) {
  return value !== '' && !isNaN(value) && isFinite(value) && Number(value) > 0;
}

async function getAllBirds(name, diet){
const db = getDB();
if(diet === "Wyszystko"){
    diet = null;
}
if(!name && !diet){
    return await db.collection('birds').find().sort({createdAt: -1}).toArray();
}
if(name && !diet){
    return await db.collection('birds').find({name: name}).sort({createdAt: -1}).toArray();
}
if(!name && diet){
    return await db.collection('birds').find({diet: diet}).sort({createdAt: -1}).toArray();
}
if(name && diet){
    return await db.collection('birds').find({name: name, diet: diet}).sort({createdAt: -1}).toArray();
}
}

async function getBirdById(id) {
    const db = getDB();
    return await db.collection('birds').findOne({ _id: new ObjectId(id) });
}


async function addBird(name, spanOfWings, formOfMovement, overallSize, diet, addedBy ) {
    if(!isPositiveNumber(spanOfWings)  || !isPositiveNumber(overallSize)) {
        throw new Error('Rozpiętość skrzydeł i ogólna wielkość muszą być dodatnimi liczbami.');
    }
    else{
        const db = getDB();
        await db.collection('birds').insertOne({ name, spanOfWings, formOfMovement, overallSize, diet, addedBy, createdAt: new Date() });
    }
}

async function updateBird(id ,name, spanOfWings, formOfMovement, overallSize, diet) {
    const db = getDB();
    await db.collection('birds').updateOne(
        { _id: new ObjectId(id) },
        { $set: { name, spanOfWings, formOfMovement, overallSize, diet  } }
    );
}

async function deleteBird(id) {
    const db = getDB();
    await db.collection('birds').deleteOne({ _id: new ObjectId(id) });
}




module.exports = {getAllBirds, getBirdById, addBird, updateBird, deleteBird};