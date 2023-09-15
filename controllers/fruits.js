import { Fruit } from "../models/fruit.js"

function index(req, res) {
  Fruit.find({})
  .then(fruits => {
    res.render('fruits/index', {
      fruits: fruits
  })
})
  .catch(error => {
    console.log(error)
    res.direct('/')
  })
}

function newFruit(req, res) {
res.render('fruits/new')
}

function create(req, res) {
console.log(req.body)
res.redirect('/fruits/new')
}

export {
  index,
  newFruit as new,
  create
}