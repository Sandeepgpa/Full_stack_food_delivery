import express from 'express'
import { addFood, listfood } from '../controllers/foodController.js'
// import multer from 'multer'
import upload from '../config/multer.js'

const foodRouter = express.Router()

foodRouter.post("/add",upload.single("image"),addFood);
foodRouter.get("/list", listfood)

export default foodRouter