
const usersModel = require('../models/usersModels');
const state = require('../state');
const bcrypt = require('bcrypt');


function isValidPassword(password) {
    const regex = /^(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/;
    return regex.test(password);
}

function hashPassword(password){
    const saltRounds = 10;
    const salt = bcrypt.genSaltSync(saltRounds);
    const hash = bcrypt.hashSync(password, salt);
    console.log(hash);
    return hash;
}

function getNewUser(req, res){
    res.render('pages/users/register');
}
async function getLoginUser(req, res){
    res.render('pages/users/login', {currentUser:await state.getCurrentUser()});
}



async function registerUser(req, res) {
    const { username, password } = req.body;
    if(await !isValidPassword(password)){
        return res.status(400).render('pages/error', {
            errors: ['Hasło musi mieć co najmniej 8 znaków i zawierać przynajmniej jedną cyfrę!']
        });
    }
    passwordHash = hashPassword(password);
    if(await usersModel.findUserByUsername(username)){
        return res.status(400).render('pages/error', {
            errors: ['Użytkownik o podanej nazwie już istnieje!']
        });
    }
    await usersModel.addUser(username, passwordHash);
    res.redirect('/users/login');
}

async function verifyPassword(password, hashedPassword) {
  return await bcrypt.compare(password, hashedPassword);
}


async function loginUser(req, res){
    const { username, password } = req.body;
    const user = await usersModel.findUserByUsername(username);
    console.log(user);
    if(user && await verifyPassword(password, user.password)){
        state.setCurrentUser(user);
        res.redirect('/');
    }
    else{
        res.redirect('/users/login');
    }
    
}

module.exports = { getNewUser, registerUser, loginUser, getLoginUser};