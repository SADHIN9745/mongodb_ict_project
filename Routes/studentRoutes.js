const express = require('express')
const studentModel = require('../Model/studentModel')
const router = express.Router()
var mongodb = require('mongodb');

router.use(express.json())

router.get('/',async(req,res)=>{
   try{ const data = await studentModel.find()
    res.send(data)
   } catch(error){
    console.log(error)
   }
})

router.post('/add',async(req,res)=>{
   try{
      var item = req.body
      await studentModel(item).save();
      console.log("Data has been added")
      res.send("Data has been added")
   }catch(error){
      console.log(error)
   }
})
router.delete('/add/:id',async(req,res)=>{
  try {
   let id = req.params.id
   await studentModel.findByIdAndDelete(id)
   res.send("item deleeted")
  } catch (error) {
      console.log(error)
      res.send(error)
  }
})
router.put('/add/:id',async (req,res)=>{
   try {

      fetch_id = req.params.id
      updated_item = req.body
      await studentModel.findByIdAndUpdate(fetch_id,updated_item);
      res.send('updated')

   } catch (error) {
      console.log(error)
   }

})
module.exports = router;