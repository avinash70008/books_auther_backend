const Books= require("../models/books.model")
const express= require('express')
const router= express.Router()


router.post("/addbooks", async(req,res)=>{
    const books = new Books(req.body)
     try{
        await books.save()
       
        res.status(201).send({books})
    }catch(e){
        res.status(500).send(e)
    }
});

router.get('/getbooks',async(req,res)=>{
    const booksdetails = await Books.find()
	res.send(booksdetails)
})

router.get('/getbooks/:id', (req, res,next) => {
    Books.findById(req.params.id)
    .then (result=>{
        res.status(200).json(result)
    }).catch(e=>{
        res.status(500).json({error:e})
    })
})

router.delete('/getbooks/delete/:id', (req, res,next) => {
    Books.deleteOne({_id: req.params.id})
    .then (()=>{
        res.status(200).json({
            message: 'Deleted!'
          });
        }
        ).catch(
            (error) => {
              res.status(400).json({
                error: error
              });
            }
          );
        })
module.exports= router;