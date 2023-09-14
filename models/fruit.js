import mongoose from "mongoose"

const Schema = mongoose.Schema

const fruitSchema = new Schema({
  favorite: String,
  eaten: Boolean
})

const Fruit = mongoose.model('Fruit', fruitSchema)

export {
  Fruit
}