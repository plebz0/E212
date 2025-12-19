const { ObjectId } = require('mongodb');
const { getDB } = require('../data/connection');

function isPositiveNumber(value) {
  return value !== '' && !isNaN(value) && isFinite(value) && Number(value) > 0;
}

async function getAllBirds(name, diet, sort = 'createdAt', order = 'desc'){
  const db = getDB();

  if(diet === "Wyszystko"){
    diet = null;
  }
  
    const query = {};

  if(name){
    query.name = name;
  } 
  if(diet){
    query.diet = diet;
  } 

  let sortObj = { createdAt: -1 };
  if(sort === 'createdAt' && order === 'asc') {
    sortObj = { createdAt: 1 };
  } 
  else if(sort === 'createdAt' && order === 'desc') {
    sortObj = { createdAt: -1 };
  }
  else if(sort === 'overallSize' && order === 'asc') {
    sortObj = { overallSize: 1 };
  }
  else if(sort === 'overallSize' && order === 'desc') {
    sortObj = { overallSize: -1 };
  }

  return await db.collection('birds').find(query).sort(sortObj).toArray();
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