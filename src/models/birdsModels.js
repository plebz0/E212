const { ObjectId } = require('mongodb');
const { getDB } = require('../data/connection');

async function getAllBirds(name, overallSize){
const db = getDB();
    return await db.collection('birds').find().sort({createdAt: -1}).toArray();
}

async function getBirdById(id) {
    const db = getDB();
    return await db.collection('birds').findOne({ _id: new ObjectId(id) });
}


async function addBird(name, spanOfWings, formOfMovement, overallSize, diet, addedBy ) {
    const db = getDB();
    await db.collection('birds').insertOne({ name, spanOfWings, formOfMovement, overallSize, diet, addedBy, createdAt: new Date() });
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