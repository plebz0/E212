const usersModel = require('../models/usersModels');
const state = require('../state');
const bcrypt = require('bcrypt');


function isValidPassword(password) {
    const regex = /^(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/;
    return regex.test(password);
}
function isValidUsername(username) {
  const regex = /^(?=(?:.*[A-Za-z]){2,}).{3,}$/;
  return regex.test(username);
}

function hashPassword(password){
    const saltRounds = 10;
    const salt = bcrypt.genSaltSync(saltRounds);
    const hash = bcrypt.hashSync(password, salt);
    console.log(hash);
    return hash;
}

function getNewUser(req, res){
    res.status(200).render('pages/users/register');
}
async function getLoginUser(req, res){
    res.status(200).render('pages/users/login', { currentUser: await state.getCurrentUser()});
}



async function registerUser(req, res) {
    const { username, password } = req.body;
    if(await !isValidUsername(username)){
        return  res.status(400).render('pages/error', {
            errors: ['Nazwa użytkownika musi mieć co najmniej 3 znaki i zawierać przynajmniej 2 litery!']
        });
    }
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
    res.status(302).redirect('/users/login');
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
        res.status(302).redirect('/');
    }
    else{
        res.status(302).redirect('/users/login');
    }
    
}

async function logoutUser(req, res){
    state.setCurrentUser(null);
    res.status(302).redirect('/');
}

module.exports = { getNewUser, registerUser, loginUser, getLoginUser, logoutUser};