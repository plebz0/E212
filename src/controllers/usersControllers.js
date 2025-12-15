
const usersModel = require('../models/usersModels');
const bcrypt = require('bcrypt');

function checkPassword(password){
  return /[0-9]/.test(password) && /[A-Za-z]{8,}/.test(password)
}

function getNewUser(req, res){
    res.render('pages/users/register');
}
function getLoginUser(req, res){
    res.render('pages/users/login');
}



async function registerUser(req, res) {
    const { username, password } = req.body;
    if(usersModel.findUser(username, password)){
        return res.render('pages/users/register', {
            errors: ['Użytkownik o podanej nazwie już istnieje!']
        });
    }
    await usersModel.addUser(username, password);
    res.redirect('/');
}

async function loginUser(req, res){
    const { username, password } = req.body;
    const user = usersModel.findUser(username, password);
    if(await password === user.password){
        res.redirect('/pages/index', {username: user.username});
    }
    else{
        res.redirect('/pages/users/login', {errors: ['Niepoprawna nazwa użytkownika lub hasło!']});
    }
    
}

module.exports = { getNewUser, registerUser, loginUser, getLoginUser};