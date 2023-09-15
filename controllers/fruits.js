import { Fruit } from "../models/fruit.js"

function index(req, res) {
  Fruit.find({})
  .then(fruits => {
    res.render('fruits/index', {
      fruits: fruits,
      time: req.time
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
  req.body.eaten = false
  Fruit.create(req.body)
  .then(fruit => {
    res.redirect('/fruits')
  })
  .catch(error=> {
    console.log(error)
    res.redirect('/fruits')
  })
}

function show(req, res) {
  Fruit.findById(req.params.fruitId)
  .then(fruit => {
    res.render('fruits/show', {
      fruit: fruit
    })
  })
    .catch(error=> {
      console.log(error)
      res.redirect('/fruits')
  })
}

function deleteTodo(req, res) {
  Fruit.findByIdAndDelete(req.params.fruitId)
  .then(fruit => {
    res.redirect('/fruits')
  })
  .catch(error => {
    console.log(error)
    res.redirect('/fruits')
  })
}

export {
  index,
  newFruit as new,
  create,
  show,
  deleteTodo as delete
}