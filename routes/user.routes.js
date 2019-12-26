const express = require('express');
const mongoose = require('mongoose');
const { User, Post } = require('./../models/user');
const router = express.Router();

router.post('/' , (req, res, next)=>{
    var user = new User({ name: 'Dev', age: 200 });
    var post = new Post({ title :'Mongoose',content : 'This is mongoose'  });
    post.save()
    .then((response)=>{
        console.log(response)
    })
    .catch((error)=>{
        throw error
    });

    user.posts.push(post)
    user.save()
    .then((response)=>{
        console.log(response)
        res.send(response)

    })
    .catch((error)=>{
        console.log(error)
    })
})

router.get('/' , (req, res, next)=>{
    User
.find({ name : 'Dev'})
.populate('posts')
.exec( (err, con )=> {
  if (err){
      throw err
  }
  console.log(con);
  res.send(con)
})
})



module.exports = router;