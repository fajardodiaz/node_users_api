const pool = require('../database/connection');

//GET ALL USERS
exports.getUsers = (req, res, next) => {
    pool.query('SELECT * FROM users ORDER BY id ASC', (err, result)=>{
        if(err){
            throw err;
        }
        res.status(200).json(result.rows);
    })
};

//GET USER BY ID
exports.getUserById = (req,res,next)=>{
    const {id} = req.params;
    pool.query('SELECT * FROM users WHERE id=$1',[id], (err, result)=>{
        if(err){
            throw err;
        }

        if(result.rows.length == 0){
            res.status(404).json({"message":"User not found"});
        }else{
            res.status(200).json(result.rows);
        }
    })
};

//CREATE USER
exports.createUser = (req,res,next)=>{
    const {name, email} = req.body;
    pool.query('INSERT INTO users(name,email) VALUES($1, $2)',[name,email],(err, result)=>{
        if(err){
            throw err;
        }
        res.status(200).json({"message":`User: ${name} created`});
    });
};

exports.updateUser = (req,res,next)=>{
    const {id} = req.params;
    const {name, email} = req.body;
    pool.query("UPDATE users SET name=$1, email=$2 WHERE id=$3",[name,email,id],(err, result)=>{
        if(err){
            throw err;
        }
        res.status(200).json({"message":`User ${name} modified succesfully`});
    });
};

exports.deleteUser = (req,res,next)=>{
    const {id} = req.params;
    pool.query("DELETE FROM users WHERE id=$1",[id],(err,result)=>{
        if(err){
            throw err;
        }
        if(result.rowCount == 0){
            res.status(404).json({"message":`User with ID: ${id} does not exist`});
        }else{
            res.status(200).json({"message":`User with ID: ${id} deleted succesfully`});
        }
    })
};