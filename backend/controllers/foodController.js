import foodModel from "../models/foodModel.js";
import fs from "fs";

const addFood = async (req,res) => {

  let image_filename = `${req.file.filename}`;

  const food = new foodModel({
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    catogery: req.body.catogery,
    image: image_filename
  });

  try {
    await food.save();
    res.json({ success: true, message: "Food Added" });
  } catch (err) {
    console.log(err);
    res.json({ success: false, message: "Error" });
  }
};

// List all Foods

const listfood  = async (req, res) => {
  try{
    const foods = await foodModel.find({})
    res.json({ success: true, data: foods });
  } catch (err) {
    console.log(err);
    res.json({ success: false, message: "Error" });
  }
};
export { addFood, listfood };
