const { ObjectId } = require('mongodb');
const { getDB } = require('../data/connection');

async function addUser(username, password ) {
    const db = getDB();
    await db.collection('users').insertOne({ username, password });
    
}

async function findUser(username, password ) {
    const db = getDB();
    return await db.collection('users').findOne({username , password});   
}

module.exports = {addUser, findUser};